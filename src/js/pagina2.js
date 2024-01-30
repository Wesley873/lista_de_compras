import fs from 'fs';
document.addEventListener('click', () => {
    fs.readFile('../index.html', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
  
});

