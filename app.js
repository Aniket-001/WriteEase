// Function to change the image src
function changeImageSrc() {
    var image1 = document.querySelector('.page1>.boxes>.box1>img:nth-child(1)');
    var image2 = document.querySelector('.page1>.boxes>.box1>img:nth-child(2)');
    var image3 = document.querySelector('.page1>.boxes>.box2>.chat');

    let image1_src1 = "./Images/media-the-power.png"
    let image1_src2 = "./Images/txt1.png"

    let image2_src1 = "./Images/media-whether-you.png"
    let image2_src2 = "./Images/txt2.png"

    let image3_src1 = "./Images/wp.png"
    let image3_src2 = "./Images/img3.png"

    // Check if the screen width is 800 pixels or less
    if (window.matchMedia('(max-width: 800px)').matches) {
        // Change the image src for small screens
        image1.src = image1_src1;
        image2.src = image2_src1;
        image3.src = image3_src1;
    } else {
        // Reset the image src for larger screens
        image1.src = image1_src2;
        image2.src = image2_src2;
        image3.src = image3_src2;
    }
}

// Initial call to set the image src based on the initial screen size
changeImageSrc();

// Event listener for screen size changes
window.addEventListener('resize', changeImageSrc);