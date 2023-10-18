pipline {
    agent {
        docker {
            image: 'node:16'
            args '-p 20000:8080'
        }
    }
    stages {
        stage("Build") {
            steps {
                sh 'yarn add'
            }
        }
        stage('Deploy') {
            steps {
                sh 'ls -la'
                sh 'echo "deploy stage"'
            }
        }
    }
}