function Student (arrayofMarks, presentDays) {
    var marks;
    var quantityOfMarks;
    var marksSum = 0;
    (function isAnArray () {
        if (Array.isArray(arrayofMarks)) {
            marks = arrayofMarks;
        } else {
            marks = 0;
        }
        quantityOfMarks = marks.length;
    })();
    var workDays = 40;
    var visitedDays = presentDays;
    function state () {
        console.log('Attendance: ' + savedAttendance);
    }
    this.studentSuccess = function () {
        marks.forEach(function (mark) {
            if (typeof mark == 'undefined') {
                quantityOfMarks--;
            } else if (typeof mark == 'number' && mark > 0 && mark <= 12) {
                marksSum += mark;
            }
        });
        console.log('Average mark = ' + Math.round(marksSum / quantityOfMarks));
        console.log('Student success = ' + Math.round(marksSum / (quantityOfMarks * 12) * 100) + '%');
    };
    this.studentAttendance = function () {
        console.log('Student Attendance = ' + Math.round(visitedDays / workDays * 100) + '%');
    }
}
var test = new Student([12, 5, -3, 8, 10, 9], 38);
test.studentSuccess();
test.studentAttendance();