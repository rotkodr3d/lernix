package com.ss20team4.lernix.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Role {
	@Id
    private RoleKey roleKey;
    private String roleName;
    
    private enum RoleKey {
        ADMIN("admin"),USER("user");
        private String roleKey;
        RoleKey(String role) {
            this.roleKey = role;
        }
    }
    
    public void setRoleName(String roleName) {
    	this.roleName = roleName;
    }
    
    public String getRoleName() {
    	return roleName;
    }
}
