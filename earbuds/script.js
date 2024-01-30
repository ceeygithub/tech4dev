document.addEventListener("DOMContentLoaded", function () {
    const images = [
        {
            imageName: "Ear bud 1",
            imageLink: "./assets/image 1.png",
            alt: "white ear bud",
            brand: "Anker",
            model: "Soundcore Life P2 True",
            description: "The sound quality on this is great, with the highs and lows being excellent. With IPX7 rating, you can use them on the shower without damaging them.The battery on this earbuds is quite good, it can last you up to 7 hours with a single full charge. ",
        },
        {
            imageName: "Ear bud 3",
            imageLink: "./assets/image 3.png",
            alt: "Ear bud",
            brand: "Jabra",
            model: "Elite 75t Earbuds",
            description: "With the IP 55 rating, they can withstand low water pressure sprays and sweat. The sound quality is good but not so great, as the bass is a little low. The battery life on this phone is massive offering 7 hours of usage with full battery ",
        },
        {
            imageName: "Ear bud 4",
            imageLink: "./assets/image 4.png",
            alt: "Ear bud",
            brand: "Sashi",
            model: "Echo Buds",
            description: "The sound quality is actually good considering the price range. In case you are caught up in the rain, sweating as a result of working out,there is no need to worry as they are IPX4 rated. ",
        },
        {
            imageName: "Ear bud 5",
            imageLink: "./assets/image 5.png",
            alt: "Ear bud",
            brand: "TaoTronics",
            model: "SoundLiberty 79",
            description: "These buds are IPX7 rated, hence they are both water and sweat resistant. Having Bluetooth 5.0, connectivity here should not be a problem. The sound and audio quality on them is good, but if you are looking for pronounced bass then these are not going to satisfy you.",
        },
        {
            imageName: "Ear bud 8",
            imageLink: "./assets/image 8.png",
            alt: "Ear bud",
            brand: "Nira",
            model: "Soundcore Life P2 True",
            description: "With the IP 55 rating, they can withstand low water pressure sprays and sweat. The sound quality is good but not so great, as the bass is a little low. The battery life on this phone is massive offering 7 hours of usage with full battery ",
        },
        {
            imageName: "Ear bud 9",
            imageLink: "./assets/image 9.png",
            alt: "Ear bud",
            brand: "naro",
            model: "Soundcore Life P2 True",
            description: "The sound quality is actually good considering the price range. In case you are caught up in the rain, sweating as a result of working out,there is no need to worry as they are IPX4 rated. ",
        },
    ];

    const slider = document.querySelector('.sliderWrapper');

    function fillGallery() {
        images.forEach((img) => {
            const imageElement = document.createElement('img');
            imageElement.classList.add('sliderImages');
            imageElement.src = img.imageLink;
            imageElement.alt = img.alt;

            slider.appendChild(imageElement);
        });
    }

    fillGallery();


    let currentIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.sliderImages');
        const brand = document.querySelector('.brand');
        const model = document.querySelector('.model');
        const description = document.querySelector('.description');

        slides.forEach((img, i) => {
            const translateXValue = (i - index) * 35;  // Adjust this value for reduced spacing
            const translateZValue = Math.abs(i - index) * -500;  // Adjust this value for reduced spacing
            const transformValue = `translate3d(${translateXValue}%, 0, ${translateZValue}px)`;

            img.style.transition = 'transform 0.5s ease-in-out';
            img.style.transform = transformValue;

            if (i === index) {
                img.style.filter = 'none';
                img.style.zIndex = 1;
            } else {
                img.style.filter = 'blur(7px)';
                img.style.zIndex = 0;
            }
        });

        const currentImage = images[index];
        brand.innerHTML = currentImage.brand;
        model.innerHTML = currentImage.model;
        description.innerHTML = currentImage.description; 
    }

    showSlide(currentIndex);

    document.querySelector('.fa-chevron-left').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showSlide(currentIndex);
    });

    document.querySelector('.fa-chevron-right').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    });
    const main = document.querySelector(' .container .main ');
    const product = document.querySelector('.product-page');
    const exploreBtn = document.querySelector('.explore-btn');
    exploreBtn.addEventListener('click', () => {
        main.classList.add('hide');
        product.classList.remove('hide');
    })
   

});
