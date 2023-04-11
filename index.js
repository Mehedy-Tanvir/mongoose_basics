const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/moviesApp')
    .then(() => {
        console.log('connection open!!!');
    })
    .catch(err => {
        console.log('Oh no error');
        console.log(err);
    });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});
const Movie = mongoose.model('Movie', movieSchema);
// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });
// amadeus.save();
// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])
//     .then(data => {
//         console.log('It Worked!');
//         console.log(data);
//     }).catch(err => {
//         console.log('Oh no error');
//         console.log(err);
//     })


// Movie.find({}).then(m => console.log(m));
// Movie.find({ rating: 'PG-13' }).then(data => console.log(data));
// Movie.find({ year: { $gte: 2010 } }).then(data => console.log(data));
// Movie.find({ year: { $lt: 1990 } }).then(data => console.log(data));
// Movie.findOne({}).then(m => console.log(m));
// Movie.find({ _id: "63e11a8efd2f546cdb486ab2" }).then(m => console.log(m));
// Movie.findById("63e11a8efd2f546cdb486ab2").then(m => console.log(m));
//find methods

// Movie.updateOne({ title: 'Amadeus' }, { year: 1984 }).then(res => console.log(res));
// Movie.updateMany({ title: { $in: ['Amadeus', 'Stand By Me'] } }, { score: 10 }).then(res => console.log(res));
// Movie.findOneAndUpdate({ title: 'The Iron Giant' }, { score: 7.8 }, { new: true }).then(res => console.log(res));
// Movie.remove({ title: 'Amelie' }).then(res => console.log(res));
// Movie.deleteMany({ year: { $gte: 1999 } }).then(res => console.log(res));
Movie.findOneAndDelete({ title: 'Alien' }).then(res => console.log(res));

