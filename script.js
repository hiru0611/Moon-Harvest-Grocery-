document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const menu = dropdown.querySelector('.dropdown-menu');

    dropdown.addEventListener('mouseenter', () => {
        menu.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
        menu.style.display = 'none';
    });
});



function showDetails(branch) {
    var branchInfoDiv = document.getElementById("branch-info");
    var branchImagesDisplayDiv = document.getElementById("branch-images-display");
    var mapDiv = document.getElementById("map");

    var details = {
        Kandy: {
            info: "Kandy is a major city in Sri Lanka, located in the Central Province. It was the last capital of the ancient kings' era of Sri Lanka.",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63326.75469507238!2d80.61048419135252!3d7.290571600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae37bbf23f9ff57%3A0x2f25eeb658dbfba7!2sKandy%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1626096083641!5m2!1sen!2sus"
        },
        Colombo: {
            info: "Colombo is the commercial capital and largest city of Sri Lanka by population. It is the financial centre of the island and a popular tourist destination.",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31686.262491249893!2d79.85587869299862!3d6.927078598791233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259258c4f6f4f%3A0x8f2b4ff5a8b6cb5f!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1626096127350!5m2!1sen!2sus"
        },
        Galle: {
            info: "Galle is a city situated on the southwestern tip of Sri Lanka. It is known for the Galle Fort, a UNESCO World Heritage Site.",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126770.08968185577!2d80.20168577522822!3d6.05351870404047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173c2b2d69d4b%3A0xf1590e25ab1edb2d!2sGalle%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1626096159920!5m2!1sen!2sus"
        }
    };

    branchInfoDiv.innerHTML = `<p>${details[branch].info}</p>`;

    // Get the images for the selected branch
    var branchImages = document.getElementById(branch.toLowerCase() + "-images").innerHTML;
    branchImagesDisplayDiv.innerHTML = branchImages;

    mapDiv.innerHTML = `<iframe src="${details[branch].mapUrl}" allowfullscreen="" loading="lazy"></iframe>`;
}