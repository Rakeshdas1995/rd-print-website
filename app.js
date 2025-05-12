
const pages = {
  home: {
    en: "<h1>Welcome to RD Print & Design Solutions</h1>",
    as: "<h1>RD প্ৰিণ্ট & ডিজাইন ছলিউচনচলৈ স্বাগতম</h1>"
  },
  about: {
    en: "<h2>About Me</h2><p>I am Rakesh Das from Barpeta Town.</p>",
    as: "<h2>মোৰ বিষয়ে</h2><p>মই ৰাকেশ দাস, বৰপেটা টাউনৰ পৰা।</p>"
  },
  portfolio: {
    en: "<h2>My Work</h2><p>Images and PDF samples go here.</p>",
    as: "<h2>মোৰ কাম</h2><p>ইমেজ আৰু PDF চ্যাম্পল তলত।</p>"
  },
  contact: {
    en: "<h2>Contact</h2><p>Email: rakeshdas190@gmail.com</p>",
    as: "<h2>যোগাযোগ</h2><p>ই-মেইল: rakeshdas190@gmail.com</p>"
  }
};
let currentLang = "en";
function navigate(page) {
  document.getElementById("content").innerHTML = pages[page][currentLang];
}
function toggleLanguage() {
  currentLang = document.getElementById("languageToggle").value;
  const hash = window.location.hash.slice(1) || "home";
  navigate(hash);
}
window.onload = () => {
  const hash = window.location.hash.slice(1) || "home";
  navigate(hash);
};
