pipeline {
  agent {
    kubernetes {
      yaml '''
apiVersion: v1
kind: Pod
metadata:
  name: buildah
spec:
  containers:
  - name: buildah
    image: quay.io/buildah/stable:v1.23.1
    command:
    - cat
    tty: true
    securityContext:
      privileged: true
    volumeMounts:
      - name: varlibcontainers
        mountPath: /var/lib/containers
  volumes:
    - name: varlibcontainers
'''   
    }
  }
  
  options {
    buildDiscarder(logRotator(numToKeepStr: '3'))
    durabilityHint('PERFORMANCE_OPTIMIZED')
    disableConcurrentBuilds()
  }
  
  stages {
    stage('Build with Buildah') {
      steps {
        container('buildah') {
            sh 'buildah build -t crm:v0'
        }
      }
    }
    stage('buildah login') {
      environment {
        DH_CREDS = credentials('harbor')
      }
      steps {
        container('buildah') {
             sh 'echo $DH_CREDS_PSW | buildah login -u $DH_CREDS_USR --password-stdin harbor.internal.local'
        }
      }
    }
    stage('tag image') {
      steps {
        container('buildah') {
          sh 'buildah tag crm:v0  agdiascloud/crm:v0'
        
        }
      }
    }
    stage('push image') {
      steps {
        container('buildah') {
          sh 'buildah push agdiascloud/crm:v0'  
        }
      }
    }
    /* stage('deploy') {
      agent {    
        kubernetes {
            label 'helm-agent'
            defaultContainer 'jnlp'
            yaml """
            apiVersion: v1
            kind: Pod
            metadata:
              name: helm
            spec:
              containers:
              - name: helm
                image: alpine/helm:latest
                command:
                - cat
                tty: true
            """
        }       
      }
      steps {
        container('helm') {
                    // Inside the helm container, execute Helm commands
                    sh 'helm version'
                    sh 'helm repo add stable https://charts.helm.sh/stable'
                    sh 'helm repo update'
                    sh 'helm install my-release stable/mysql'
                }
      }
    } */
  }
}

