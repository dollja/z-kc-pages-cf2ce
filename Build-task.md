
# Build task

This page describes the Build task. This is a weekly task, usually run between 4-4:30 on Thursday afternoon.

## Weekly publishing 

To trace build failures, make sure to pay attention to the [#git-kc-pages Slack channel](https://ibm-systems-z.slack.com/archives/CG3E1FAPQ). It should list the history of builds, pull requests (PR), and users.

The [z-cdd-fed Continuous Build](https://cloud.ibm.com/devops/toolchains/0319cf1e-3238-4ee8-8350-cfb4c0589763?env_id=ibm:yp:us-south) runs on every commit that is merged to the [master branch](https://github.ibm.com/z-cdd-fed/z-kc-pages/branches) and has access to github credentials. It exists to make sure the z-kc-pages code base is clean and compilable on branches and pull requests.  If your pull requests have been closed at anytime before Thursday 4 pm, then your changes will be published for the week. 

#### How the builds are run

The builds run in IBM Cloud DevOps and are scripted using Cloud Foundry build definition files.

1. In IBM Cloud [z-cdd-fed Pipeline](https://cloud.ibm.com/devops/pipelines/c571c3e7-650a-43c6-ac8b-9a9041d4c921?env_id=ibm:yp:us-south), change the [->Build stage->Configuration ->Input](https://cloud.ibm.com/devops/pipelines/c571c3e7-650a-43c6-ac8b-9a9041d4c921/config/stage/6bebc6c0-c175-443c-8f24-b864f4d4facf/jobs/c724c46b-09fa-4d5e-b833-490b9014b343?env_id=ibm:yp:us-south) to:  "run jobs automatically for the chosen branch 'Master'"
2. In [z-kc-pages/pulls](https://github.ibm.com/z-cdd-fed/z-kc-pages/pulls), Merge all pull requests (PR)s to Master
3. Monitor [z-cdd-fed Delivery pipeline](https://cloud.ibm.com/devops/pipelines/c571c3e7-650a-43c6-ac8b-9a9041d4c921?env_id=ibm:yp:us-south) for blue/green deployments
4. Once Deploy stage completes successfully, return the  [->Build stage->Configuration ->Input](https://cloud.ibm.com/devops/pipelines/c571c3e7-650a-43c6-ac8b-9a9041d4c921/config/stage/6bebc6c0-c175-443c-8f24-b864f4d4facf/jobs/c724c46b-09fa-4d5e-b833-490b9014b343?env_id=ibm:yp:us-south) to: "only when this stage is run manually for the chosen branch "Master"


- [Cloud Foundry application template docs](https://www.ibm.com/cloud/architecture/tutorials/use-develop-test-cloud-foundry-app-toolchain)

Testing staging
