pipeline{
    agent none
    tools {nodejs "node-v16"}
    options {
        disableConcurrentBuilds()
    }
    stages {
        stage("Build Staging"){
            when {
                branch 'staging'
            }            
            agent {
                node {
                    label "stg"
                }
            }
            steps{
                echo 'BUILD EXECUTION STARTED'
                sh "npm --version"
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("Deploy to Staging"){
            when {
                branch 'staging'
            }            
            agent {
                node {
                    label "stg"
                }
            }
            steps{
                echo 'DEPLOY EXECUTION STARTED'
                sh "sudo mkdir -p /var/www/homepage && sudo cp -a build/. /var/www/homepage/"
            }
        }
        stage("Build Production"){
            when {
                branch 'main'
            }            
            agent {
                node {
                    label "prod"
                }
            }
            steps{
                echo 'BUILD EXECUTION STARTED'
                sh "npm --version"
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("Deploy to Production"){
            when {
                branch 'main'
            }            
            agent {
                node {
                    label "prod"
                }
            }
            steps{
                echo 'DEPLOY EXECUTION STARTED'
                sh "sudo mkdir -p /var/www/homepage && sudo cp -a build/. /var/www/homepage/"
            }
        }
    }
}