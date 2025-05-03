const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { spawn } = require('child_process');
const router = express.Router();  // Define the router

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev')); // 📝 Logs HTTP requests automatically

app.set('view engine', 'ejs');  // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views'));  // Set the views directory
app.use(express.static('public'));  // Serve static files from the 'public' directory


// Define routes within the router
router.get("/", (req, res) => {
    res.render('home')
});

router.get("/predict", (req, res) => {
    res.render('index');  // Render the EJS template for the prediction form
});
app.post('/predict', (req, res) => {
    const { mean_radius, mean_texture, mean_perimeter, mean_area, mean_smoothness } = req.body;
    const inputData = {
        'mean radius': parseFloat(mean_radius),
        'mean texture': parseFloat(mean_texture),
        'mean perimeter': parseFloat(mean_perimeter),
        'mean area': parseFloat(mean_area),
        'mean smoothness': parseFloat(mean_smoothness)
    };

    const python = spawn('python', ['predict.py']);
    python.stdin.write(JSON.stringify(inputData));
    python.stdin.end();

    let result = '';

    python.stdout.on('data', (data) => {
        result += data.toString();
    });

    python.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });+

    python.on('close', (code) => {
        try {
            const output = JSON.parse(result);
            res.render('result', { prediction: output.prediction });  // <-- render separate page
        } catch (error) {
            res.status(500).send("Error parsing Python response.");
        }
    });
});



// Mount the router to the app
app.use('/', router);  // Use the router for the specified routes

// Start the server
app.listen(3000, () => console.log('🚀 Server started on http://localhost:3000'));
