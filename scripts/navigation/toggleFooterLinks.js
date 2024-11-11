function toggleFooterLinks() {
  const footerLinksContent = document.getElementById('footer-links-content');
  const pageContent = document.getElementById('page-content');
  
  if (footerLinksContent.style.display === 'none' || footerLinksContent.style.display === '') {
      footerLinksContent.style.display = 'flex';
      footerLinksContent.scrollIntoView({ behavior: 'smooth' }); 
  } else {
      footerLinksContent.style.display = 'none';
      pageContent.style.display = 'none'; 
  }
}