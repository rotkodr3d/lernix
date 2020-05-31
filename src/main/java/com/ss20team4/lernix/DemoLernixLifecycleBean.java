package com.ss20team4.lernix;

import org.springframework.context.SmartLifecycle;
import org.springframework.stereotype.Component;

import com.ss20team4.lernix.repos.ExamRepo;
import com.ss20team4.lernix.repos.ExerciseRepo;
import com.ss20team4.lernix.repos.LearnUnitRepo;
import com.ss20team4.lernix.repos.UserRepo;

@Component
public class DemoLernixLifecycleBean implements SmartLifecycle{

	private boolean running;
	private UserRepo userRepo;
	private ExamRepo examRepo;
	private ExerciseRepo exerciseRepo;
	private LearnUnitRepo learnUnitRepo;
	
	@Override
    public void stop() {
        running = false;
    }

    @Override
    public boolean isRunning() {
        // TODO Auto-generated method stub
        return running;
    }

    @Override
    public int getPhase() {
        return 1;
    }

    @Override
    public boolean isAutoStartup() {
        return true;
    }

    @Override
    public void stop(Runnable callback) {
        running = false;
        callback.run();
    }

	@Override
	public void start() {
		running = true;
		
	}
	
	private void createUser() {
		
	}
	
	private void createExams() {
		
	}
	
	private void createExercises() {
		
	}
	
	private void createLearnUnits() {
		
	}
}
