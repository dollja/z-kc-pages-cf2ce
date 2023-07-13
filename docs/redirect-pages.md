# 2-Step Page Redirection  

   1. Copy the existing folder and nunjucks file. Rename the copied folder as the new target URL to which you will redirect.  

   2. In the original existing folder, at the top of your index.nunjucks file, add: 
    <meta http-equiv = "refresh" content = "0; url = http://www.google.com" />. 
    Specify the folder name as the new target URL to which you will redirect. 
    Remove the contents of the index.nunjucks file. The sample code below demonstrates the function.  

People who visit : http://www.ibm.com/support/z-content-solution/this-old-page are redirected to : 
http://www.ibm.com/support/z-content-solution/this-new-improved-page.  

<!DOCTYPE html>  

<html>  

<head>  

<title>This Old Page</title> 

<meta http-equiv = "refresh" content = "0; url = http://www.ibm.com/support/z-content-solution/this-new-improved-page" />  

</head> 

        <!-- MAIN CONTAINER BEGIN --> 

        {% block content %} {% endblock %}    

</head>  

</body>  

</html> 

 

Real example from file: src\pages\support\z-content-solutions\container-pricing\index.nunjucks 

 

<!DOCTYPE html> 

<html lang="en-US"> 

<head> 

    <META http-equiv="refresh" content="0;URL=https://www.ibm.com/support/z-content-solutions/tailored-fit-pricing/"> 

    

</head> 

        <!-- MAIN CONTAINER BEGIN --> 

        {% block content %} {% endblock %} 

         

</body> 

</html> 

 
