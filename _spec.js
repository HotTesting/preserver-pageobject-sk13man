//Импорт пейдж обджекта из другого файла
let NotesPage = require('./pageObjects/NotesPage.js').NotesPage
let ArchievePage = require('./pageObjects/ArchievePage.js').ArchievePage
let MainPage = require('./pageObjects/MainPage.js').MainPage
let RecycleBin = require('./pageObjects/RecycleBin.js').RecycleBin
let About = require('./pageObjects/AboutPage.js').About


describe('Preserver tests', function () {
    let notesPage = new NotesPage()


    it('should be created when title and body provided', function () {

        notesPage.createNote('Test', 'Test')
        expect(notesPage.getNotes().count()).toBe(1, 'Notes count should be 1 after created')
    })

    it('should be created when only title provided', function () {

        notesPage.createNote('Test', '')
        expect(notesPage.getNotes().count()).toBe(2, 'Notes count should be 1 after created')
    })

    it('should be created when only body provided', function () {

        notesPage.createNote('', 'Test')
        expect(notesPage.getNotes().count()).toBe(3, 'Notes count should be 1 after created')

    })

    it('should NOT be created ', function () {

        notesPage.createNote('', '')
        expect(notesPage.getNotes().count()).toBe(3, 'Notes count should be 0')

    })


})

describe('Preserver Achieve tests', function () {
    let archievePage = new ArchievePage()
    let mainPage = new MainPage()


    it('should be moved to Achieve Notes', function () {
        mainPage.createNotes('Note for achieving', 'Archieve')
        archievePage.archieveNote()
        expect(archievePage.getNotes().count()).toBe(1, 'Notes count should be 1 after archieved')
    })

})
describe('Preserver Delete tests', function () {
    let recyclebin = new RecycleBin()
    let mainPage = new MainPage()


    it('Should be removed to recycle bin', function () {
        mainPage.createNotes('Note for deleting', 'Delete')
        recyclebin.deleteNote()
        expect(recyclebin.getNotes().count()).toBe(1, 'Notes count in recycle bin should be 1')
    })

})


describe('Preserver tests About Page', function () {

    let about = new About()
    it('should redirect to AboutPage from NotePage', function () {
        about.openAbout()
        expect(browser.getCurrentUrl()).toBe('http://www.hiteshbalar.com/preserver/about')
    })

    it('all elements should be visible', function () {

        about.openAbout()
        expect(about.left_arrow.isDisplayed()).toBe(true)
        expect(about.github.isDisplayed()).toBe(true)
        expect(about.twitter.isDisplayed()).toBe(true)

    })

})