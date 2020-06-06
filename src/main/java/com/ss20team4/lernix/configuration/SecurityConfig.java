package com.ss20team4.lernix.configuration;

import javax.sql.DataSource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.jdbc.JdbcDaoImpl;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.RequestCache;
import org.springframework.security.web.savedrequest.SimpleSavedRequest;
import org.springframework.web.cors.CorsConfiguration;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
    DataSource dataSource;
    
    @Autowired
    UserDetailsService userDetailsService;
    
    @Autowired
    public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {
      auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
    }

	@Override
	protected void configure(final HttpSecurity http) throws Exception {
		http.httpBasic()
		.and()
		.authorizeRequests()
		.antMatchers(HttpMethod.GET, "/get/**").authenticated()
		//.antMatchers(HttpMethod.POST, "/post/**").authenticated()
        .antMatchers(HttpMethod.PUT, "/put/**").authenticated()
        .antMatchers(HttpMethod.DELETE, "/delete/**").authenticated()
        .and()
        .authorizeRequests().antMatchers(HttpMethod.POST, "/post/user").anonymous()
        .antMatchers(HttpMethod.OPTIONS, "/**").anonymous()
        .and()
        .formLogin().loginPage("/login.html")
        .loginProcessingUrl("/process_login") //http basic
        //.usernameParameter("user_name").passwordParameter("password")
        //.successHandler(new RefererRedirectionAuthenticationSuccessHandler())
        .and()
        .logout().logoutUrl("/logout").and().cors().disable().csrf().disable();
//			.antMatchers(HttpMethod.GET,
//					"/index*", "/static/**", "/*.js", "/*.json", "/*.ico")
//			.permitAll()
//			.anyRequest().authenticated()
//			.and()
//			.formLogin().loginPage("/login")
//			.loginProcessingUrl("/perform_login")
//			.defaultSuccessUrl("/", true)
//			.failureUrl("/index.html?error=true")
//			.and()
//			.logout()
//			.logoutUrl("/perform_logout")
//			.deleteCookies("JSESSIONID");
		//http.cors().configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues());
	}
	@Bean(name="passwordEncoder")
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
	
	@Bean(name = "userDetailsService")
	public UserDetailsService userDetailsService() {
		JdbcDaoImpl jdbcImpl = new JdbcDaoImpl();
		jdbcImpl.setDataSource(dataSource);
		jdbcImpl.setUsersByUsernameQuery("select user_name,password,'true' as enabled from user where user_name=?");
		jdbcImpl.setAuthoritiesByUsernameQuery(
				"select user_name, user.role_key FROM role RIGHT JOIN user ON role.role_key = user.role_key WHERE user_name=?");
		return jdbcImpl;
	}
}
