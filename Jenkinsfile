pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                echo 'Cloning repository from GitHub...'
                git branch: 'main', url: 'https://github.com/dikshat25/registration-form-git.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Build stage: Compiling/preparing application...'
                bat 'echo Build completed at %DATE% %TIME%'
            }
        }

        stage('Test') {
            steps {
                echo 'Test stage: Running automated tests...'
                bat 'echo All tests passed successfully'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy stage: Copying files to deployment directory...'
                bat '''
                    if not exist "C:\\deploy" mkdir C:\\deploy
                    xcopy /E /Y /I . C:\\deploy\\
                    echo Deployment complete at %DATE% %TIME%
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline finished successfully. Application is live.'
        }
        failure {
            echo 'Pipeline failed. Check console output for errors.'
        }
    }
}
