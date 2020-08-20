$(document).ready(function () {
    // variable grabbing the id from the html
    let currentDay = $('#currentDay')
    
    // displays the current date at the top of the page
    currentDay.text(moment().format('dddd MMMM Do YYYY'))
    // function that presents the users saved information
    addToSchedule()
    
})
// event listeners to save and display the user input from the text area. information is saved in local storage and pushed from local storage
    $('#saveNine').click(function () {
        let timeSlot = "#inputNine"
        let details = document.getElementById('inputNine').value
        saveAppointment(timeSlot, details)
        addToSchedule()
    })

    $('#saveTen').click(function () {
        let timeSlot = "#inputTen"
        let details = document.getElementById('inputTen').value
        saveAppointment(timeSlot, details)
        addToSchedule()
    })

    $('#saveEleven').click(function () {
        let timeSlot = "#inputEleven"
        let details = document.getElementById('inputEleven').value
        saveAppointment(timeSlot, details)
        addToSchedule()
    })

    $('#saveTwelve').click(function () {
        let timeSlot = "#inputTwelve"
        let details = document.getElementById('inputTwelve').value
        saveAppointment(timeSlot, details)
        addToSchedule()
    })

    $('#saveOne').click(function () {
        let timeSlot = "#inputOne"
        let details = document.getElementById('inputOne').value
        saveAppointment(timeSlot, details)
        addToSchedule()
    })

    $('#saveTwo').click(function () {
        let timeSlot = "#inputTwo"
        let details = document.getElementById('inputTwo').value
        saveAppointment(timeSlot, details)
        addToSchedule()
    })

    $('#saveThree').click(function () {
        let timeSlot = "#inputThree"
        let details = document.getElementById('inputThree').value
        saveAppointment(timeSlot, details)
        addToSchedule()
    })

    $('#saveFour').click(function () {
        let timeSlot = "#inputFour"
        let details = document.getElementById('inputFour').value
        saveAppointment(timeSlot, details)
        addToSchedule()
    })

    $('#saveFive').click(function () {
        let timeSlot = "#inputFive"
        let details = document.getElementById('inputFive').value
        saveAppointment(timeSlot, details)
        addToSchedule()
    })

    
    // function that saves the users text input to local storage
    function saveAppointment(time, details) {
        const newAppointment = {
            time: time,
            title: details
        }

        newArray = JSON.parse(localStorage.getItem("newArray")) || [];

        newArray = newArray.filter(appointment => appointment.time !== newAppointment.time);

        newArray.push(newAppointment);

        localStorage.setItem('newArray', JSON.stringify(newArray))
        
    }
    // function that adds the saved items from local storage to the html
    function addToSchedule() {
        newArray = JSON.parse(localStorage.getItem("newArray")) || [];

        newArray.map(newAppointment => {
            if (newAppointment.title != 0) {
                $(newAppointment.time).html(newAppointment.title)
            }
        })
    }
    // static variables that set parameters for the time to be checked in the time checking function
    let newArray = [];
    let time = moment();
    let timeFormat = 'hh:mma'
    let nineStart = moment('9:00am',timeFormat)
    let nineEnd = moment('9:59am', timeFormat)
    let tenStart = moment('10:00am', timeFormat)
    let tenEnd = moment('10:59am', timeFormat)
    let elevenStart = moment('11:00am', timeFormat)
    let elevenEnd = moment('11:59am', timeFormat)
    let twelveStart = moment('12:00pm', timeFormat)
    let twelveEnd = moment('12:59pm', timeFormat)
    let oneStart = moment('1:00pm', timeFormat)
    let oneEnd = moment('1:59pm', timeFormat)
    let twoStart = moment('2:00pm', timeFormat)
    let twoEnd = moment('2:59pm', timeFormat)
    let threeStart = moment('3:00pm', timeFormat)
    let threeEnd = moment('3:59pm', timeFormat)
    let fourStart = moment('4:00pm', timeFormat)
    let fourEnd = moment('4:59pm', timeFormat)
    let fiveStart = moment('5:00pm', timeFormat)
    let fiveEnd = moment('5:59pm', timeFormat)
    // runs the time function every second to update the color of the page depending on the time
    setInterval(function () {
        checkTime();
    }, 1000);
// checks times against their static variables and adds classes to the specified html which then changes the color based on the time it is
    function checkTime() {
        if (time.isBefore(nineStart)) {
            $('#inputNine').addClass('future')
        } else if (time.isBetween(nineStart, nineEnd)) {
            $('#inputNine').addClass('present')
        } else if (time.isAfter(nineEnd)) {
            $('#inputNine').addClass('past')
        }

        if (time.isBefore(tenStart)) {
            $('#inputTen').addClass('future')
        } else if (time.isBetween(tenStart, tenEnd)) {
            $('#inputTen').addClass('present')
        } else if (time.isAfter(tenEnd)) {
            $('#inputTen').addClass('past')
        }

        if (time.isBefore(elevenStart)) {
            $('#inputEleven').addClass('future')
        } else if (time.isBetween(elevenStart, elevenEnd)) {
            $('#inputEleven').addClass('present')
        } else if (time.isAfter(elevenEnd)) {
            $('#inputEleven').addClass('past')
        }

        if (time.isBefore(twelveStart)) {
            $('#inputTwelve').addClass('future')
        } else if (time.isBetween(twelveStart, twelveEnd)) {
            $('#inputTwelve').addClass('present')
        } else if (time.isAfter(twelveEnd)) {
            $('#inputTwelve').addClass('past')
        }

        if (time.isBefore(oneStart)) {
            $('#inputOne').addClass('future')
        } else if (time.isBetween(oneStart, oneEnd)) {
            $('#inputOne').addClass('present')
        } else if (time.isAfter(oneEnd)) {
            $('#inputOne').addClass('past')
        }

        if (time.isBefore(twoStart)) {
            $('#inputTwo').addClass('future')
        } else if (time.isBetween(twoStart, twoEnd)) {
            $('#inputTwo').addClass('present')
        } else if (time.isAfter(twoEnd)) {
            $('#inputTwo').addClass('past')
        }

        if (time.isBefore(threeStart)) {
            $('#inputThree').addClass('future')
        } else if (time.isBetween(threeStart, threeEnd)) {
            $('#inputThree').addClass('present')
        } else if (time.isAfter(threeEnd)) {
            $('#inputThree').addClass('past')
        }

        if (time.isBefore(fourStart)) {
            $('#inputFour').addClass('future')
        } else if (time.isBetween(fourStart, fourEnd)) {
            $('#inputFour').addClass('present')
        } else if (time.isAfter(fourEnd)) {
            $('#inputFour').addClass('past')
        }

        if (time.isBefore(fiveStart)) {
            $('#inputFive').addClass('future')
        } else if (time.isBetween(fiveStart, fiveEnd)) {
            $('#inputFive').addClass('present')
        } else if (time.isAfter(fiveEnd)) {
            $('#inputFive').addClass('past')
        }     
    }




