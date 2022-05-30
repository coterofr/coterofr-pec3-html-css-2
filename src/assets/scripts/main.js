/**
 * Import dependencies from node_modules
 * see commented examples below
 */

/**
 * Write any other JavaScript below
 */

+( function() {

  /* Ver más items */

  function _viewMore(viewMoreClass, itemViewLessClass, viewLessClass) {
    let viewMoreBusinessList = document.querySelectorAll(viewMoreClass);
  
    viewMoreBusinessList.forEach(viewMore => {
      viewMore.addEventListener("click", event => {
        viewMoreBusinessList.forEach(viewHide => {
          viewHide.classList.add("is-hidden");
        });

        let businessList = document.getElementsByClassName(itemViewLessClass);
        Array.from(businessList).forEach(item => {
          item.classList.remove("is-hidden");
        });

        let viewLessList = document.querySelectorAll(viewLessClass);
        viewLessList.forEach(viewLess => {
          viewLess.classList.remove("is-hidden");
        });
      });
    });
  }

  /* Ver menos items */

  function _viewLess(viewLessClass, itemViewLessClass, viewMoreClass) {
    let viewLessBusinessList = document.querySelectorAll(viewLessClass);
  
    viewLessBusinessList.forEach(viewLess => {
      viewLess.addEventListener("click", event => {
        viewLessBusinessList.forEach(viewHide => {
          viewHide.classList.add("is-hidden");
        });

        let businessList = document.getElementsByClassName(itemViewLessClass);
        Array.from(businessList).forEach(item => {
          item.classList.add("is-hidden");
        });

        let viewMoreList = document.querySelectorAll(viewMoreClass);
        viewMoreList.forEach(viewMore => {
          viewMore.classList.remove("is-hidden");
        });
      });
    });
  }

  /* Ver más artistas */
  
  _viewMore(".view-more-artists", "article-list-artists-item view-less", ".view-less-artists");
  
  /* Ver menos artistas */

  _viewLess(".view-less-artists", "article-list-artists-item view-less", ".view-more-artists");

  /* Ver más grupos */
  
  _viewMore(".view-more-bands", "article-list-bands-item view-less", ".view-less-bands");
  
  /* Ver menos grupos */

  _viewLess(".view-less-bands", "article-list-bands-item view-less", ".view-more-bands");

  /* Leer más detalle del artículo */
  
  _viewMore(".read-more-detail", "read-less-text-detail", ".read-less-detail");
  
  /* Leer menos detalle del artículo */

  _viewLess(".read-less-detail", "read-less-text-detail", ".read-more-detail");

  /* Leer más información del artículo */
  
  _viewMore(".read-more-info", "read-less-text-info", ".read-less-info");
  
  /* Leer menos información del artículo */

  _viewLess(".read-less-info", "read-less-text-info", ".read-more-info");
  
} )();
