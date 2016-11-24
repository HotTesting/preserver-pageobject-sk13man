
class About {

    constructor() {

        this.openMenuButton = $('#navbar .glyphicon-option-vertical')
        this.aboutButton = $(".navbar-right a[href='/preserver/about']")
        this.left_arrow = $('.fa-arrow-left')
        this.github = $('.fa-github')
        this.twitter = $('.fa-twitter')
       

    }

     openAbout() {
        this.openMenuButton.click()
        this.aboutButton.click()
       }
 
}

// Экспортим объект чтобы он был доступен в других файлах
module.exports.About = About