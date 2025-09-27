AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
 
  
  {
    title: "ShieldIT",
    cardImage: "assets/images/project-page/shieldit.png",
    description: "A secured chat app with advanced security features for organizations.",
    long_desc: `<p>A comprehensive <b>secured chat application</b> designed for organizations with enterprise-grade security.<br>Key Features:</p><ul><li>End-to-end encrypted messaging</li><li>Video and audio calling capabilities</li><li>Phone security scanning for malicious apps</li><li>Phishing URL detection and blocking</li><li>Decentralized blockchain database structure</li><li>Location sharing and multimedia file transfer</li><li>Real-time malware scanning of URLs in chat</li></ul>`,
    tagimg: "https://cdn.prod.website-files.com/671a215b87cb1fa7c1600a76/67458160413664de1a7d6de5_logo.png",
    Previewlink: "https://play.google.com/store/apps/details?id=com.assacnetworks.shieldit&hl=en_IN",
  },
  {
    title: "Pin It Mate",
    cardImage: "assets/images/project-page/pinitmate.png",
    description: "A travel planning app for discovering places along your trip route.",
    long_desc: `<p>An innovative <b>travel planning application</b> that helps users discover and plan their journey.<br>Features:</p><ul><li>Search and pin-point source and destination</li><li>Find hotels, restaurants, and gas stations along the route</li><li>Customizable route priority settings</li><li>Multi-user trip sharing capabilities</li><li>Real-time route optimization</li><li>Location-based recommendations</li></ul>`,
    tagimg: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
    Previewlink: "https://play.google.com/store/apps/details?id=com.pinitmate&hl=en_IN",
  },
  {
    title: "GeoKa-Ching",
    cardImage: "assets/images/project-page/geokaching.png",
    description: "A treasure hunt app where users participate in events and collect rewards.",
    long_desc: `<p>An engaging <b>treasure hunt application</b> that gamifies exploration and discovery.<br>Features:</p><ul><li>Interactive map showing available hunts</li><li>Join and participate in treasure hunts</li><li>Solve clues with progressive difficulty</li><li>Reward system for clue discovery and hunt completion</li><li>Location-based hunt creation and management</li><li>Social features for sharing achievements</li></ul>`,
    tagimg: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
    Previewlink: "https://play.google.com/store/apps/details?id=com.geokaching.app&hl=en_IN",
  },
  {
    title: "VetNOW",
    cardImage: "assets/images/project-page/vetnow2.png",
    description: "A veterinary appointment booking app for remote pet checkups.",
    long_desc: `<p>A comprehensive <b>veterinary telemedicine platform</b> for hassle-free remote pet care.<br>Features:</p><ul><li>Clinic registration and code-based user onboarding</li><li>Pet/animal/farm profile management</li><li>Online appointment booking system</li><li>Doctor selection with availability calendar</li><li>Remote consultation capabilities</li><li>Medical history tracking and management</li></ul>`,
    tagimg: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
    Previewlink: "https://play.google.com/store/apps/details?id=com.vetnow.vetnow&hl=en_IN",
  },
  {
    title: "BioSig-ID",
    cardImage: "assets/images/project-page/biosigid.png",
    description: "A digital signature app with secure biometric authentication.",
    long_desc: `<p>A secure <b>digital signature application</b> with advanced biometric authentication.<br>Features:</p><ul><li>Custom digital signature creation on touchscreen</li><li>Alpha-numeric password confirmation</li><li>IP-based security tracking</li><li>Cloud storage with encryption</li><li>Signature verification and validation</li><li>Audit trail for signature usage</li></ul>`,
    tagimg: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
    Previewlink: "https://www.biosig-id.com/",
  },
  {
    title: "UrbaEvent",
    cardImage: "assets/images/project-page/urbaevent.png",
    description: "A comprehensive taxi booking platform similar to Uber.",
    long_desc: `<p>A full-featured <b>ride-sharing platform</b> connecting passengers with drivers.<br>Features:</p><ul><li>Real-time taxi and bike booking</li><li>Immediate and scheduled ride options</li><li>Address search and route optimization</li><li>Digital wallet and card payment integration</li><li>Driver online/offline status management</li><li>Bank transfer withdrawal system</li><li>Ride acceptance and rejection controls</li></ul>`,
    tagimg: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
    Previewlink: "https://apps.apple.com/dk/app/urbaevent/id6470919049",
  },
  {
    title: "BoTrak App",
    cardImage: "assets/images/project-page/botrak.png",
    description: "An employee tracking system for construction companies.",
    long_desc: `<p>A comprehensive <b>construction workforce management system</b> for remote employee tracking.<br>Features:</p><ul><li>Clock in/out with GPS location verification</li><li>Facial recognition authentication using AWS API</li><li>Geofencing with polygon and circle drawing</li><li>Automatic entry/exit notifications</li><li>Detailed reporting and analytics dashboard</li><li>Project management and progress tracking</li><li>Employee performance monitoring</li></ul>`,
    tagimg: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
    Previewlink: "https://play.google.com/store/apps/details?id=com.botrak.app",
  },
  {
    title: "Macey",
    cardImage: "assets/images/project-page/no-image.png",
    description: "A car, villa, and yacht rental platform similar to Turo.",
    long_desc: `<p>A versatile <b>rental marketplace</b> for vehicles, villas, and yachts.<br>Features:</p><ul><li>Multi-category rental search (cars, villas, yachts)</li><li>Flexible booking with time period selection</li><li>Multiple payment options including Bitcoin</li><li>Digital wallet integration</li><li>Owner dashboard for listing management</li><li>Photo upload and detailed pricing setup</li><li>Secure bank transfer withdrawal system</li></ul>`,
    tagimg: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
    Previewlink: "",
  },
  {
    title: "JMH Construction",
    cardImage: "assets/images/project-page/jmh.png",
    description: "An employee tracking system for construction companies.",
    long_desc: `<p>A comprehensive <b>construction workforce management system</b> for remote employee tracking.<br>Features:</p><ul><li>Clock in/out with GPS location verification</li><li>Facial recognition authentication using AWS API</li><li>Geofencing with polygon and circle drawing</li><li>Automatic entry/exit notifications</li><li>Detailed reporting and analytics dashboard</li><li>Project management and progress tracking</li><li>Employee performance monitoring</li></ul>`,
    tagimg: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
    Previewlink: "",
  },

];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description, Previewlink, Githublink }, index) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" data-project-index="${index}">
          <div class="wrapper" style="background: url(${cardImage}) center center no-repeat; background-size: cover;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
  
  // Add click event listeners to all project cards
  document.querySelectorAll('.skill-card').forEach((card, index) => {
    card.addEventListener('click', function(e) {
      // Don't open modal if clicking on social links
      if (e.target.closest('.social-icon')) {
        return;
      }
      openProjectModal(index);
    });
  });
};

// Modal functionality
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close');
const modalImage = document.getElementById('modalProjectImage');
const modalTitle = document.getElementById('modalProjectTitle');
const modalDescription = document.getElementById('modalProjectDescription');
const modalPreviewLink = document.getElementById('modalPreviewLink');
const modalGithubLink = document.getElementById('modalGithubLink');

function openProjectModal(projectIndex) {
  const project = projects[projectIndex];
  
  // Update modal content
  modalImage.src = project.cardImage;
  modalImage.alt = project.title;
  modalTitle.textContent = project.title;
  if (project.long_desc) {
    modalDescription.innerHTML = project.long_desc;
  } else {
    modalDescription.textContent = project.description;
  }
  
  // Update preview link
  if (project.Previewlink) {
    modalPreviewLink.href = project.Previewlink;
    modalPreviewLink.style.display = 'flex';
  } else {
    modalPreviewLink.style.display = 'none';
  }
  
  // Hide GitHub link completely
  modalGithubLink.style.display = 'none';
  
  // Show modal
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
  
  // Focus on the modal content
  modal.focus();
  
  // Add tabindex to make modal focusable
  modal.setAttribute('tabindex', '-1');
}

function closeProjectModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
  
  // Remove tabindex when closing
  modal.removeAttribute('tabindex');
}

// Event listeners for modal
closeBtn.addEventListener('click', closeProjectModal);

// Close modal when clicking outside of it
modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    closeProjectModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && modal.style.display === 'block') {
    closeProjectModal();
  }
});

document.addEventListener("DOMContentLoaded", function() {
  showCards();
  // Disable hover animation on click
  setTimeout(function() {
    document.querySelectorAll('.card .wrapper').forEach(function(wrapper) {
      wrapper.addEventListener('click', function() {
        this.classList.add('no-hover');
      });
    });
  }, 500); // Wait for cards to render
});

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
