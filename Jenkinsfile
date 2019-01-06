pipeline{
  agent any
  tools {nodejs "node"}
  stages{
    stage('restore & build'){
      steps{
        sh "npm i"
        sh "npm run build-dev"
      }
    }
  }
}
