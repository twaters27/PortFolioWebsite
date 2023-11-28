window.addEventListener("scroll", function() {showFunction()});

        function showFunction() {
            if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
                document.getElementById("toptexts2").style.display = "block";
            } else {
                document.getElementById("toptexts2").style.display = "none";
            }
        }

        function changeContent(buttonNumber) {
            // Get the div and elements to be changed
            var contentDiv = document.getElementById("contentDiv");
            var textElement = contentDiv.querySelector("p");
            var imageElement = contentDiv.querySelector("img");
        
            // Change text and image based on the button clicked
            switch (buttonNumber) {
                case 1:
                    textElement.textContent = "Text for Button 1";
                    imageElement.src = "image1.jpg";
                    break;
                case 2:
                    textElement.textContent = "Text for Button 2";
                    imageElement.src = "image2.jpg";
                    break;
                case 3:
                    textElement.textContent = "Text for Button 3";
                    imageElement.src = "image3.jpg";
                    break;
                case 4:
                    textElement.textContent = "Text for Button 4";
                    imageElement.src = "image4.jpg";
                    break;
                case 5:
                    textElement.textContent = "Text for Button 5";
                    imageElement.src = "image5.jpg";
                    break;
                default:
                    // Default case if the buttonNumber is not recognized
                    break;
            }
        }


        
