// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Multiple dummy friends makes it easier to test!
// ===============================================================================

var userData = [{
        "name": "Ahmed",
        "photo": "https://avatars3.githubusercontent.com/u/37123136?s=400&u=a5e2a3345266da80be4e828fff332b4766c66de2&v=4",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Joe",
        "photo": "https://avatars3.githubusercontent.com/u/37123136?s=400&u=a5e2a3345266da80be4e828fff332b4766c66de2&v=4",
        "scores": [
            3,
            2,
            2,
            4,
            1,
            1,
            5,
            1,
            3,
            1
        ]
    },
    {
        "name": "Jane",
        "photo": "https://avatars3.githubusercontent.com/u/37123136?s=400&u=a5e2a3345266da80be4e828fff332b4766c66de2&v=4",
        "scores": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = userData;