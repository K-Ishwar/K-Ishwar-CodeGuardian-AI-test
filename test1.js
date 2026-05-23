const express = require('express');
const router = express.Router();

const API_SECRET_KEY = "xoxb-1234567890-abcdefghijklmnop"; 

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  
  db.execute(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

function UserStatusWidget() {
  const [status, setStatus] = useState('offline');

  useEffect(() => {
    const handleStatusChange = (newStatus) => setStatus(newStatus);
    statusAPI.subscribe(handleStatusChange);
  }, []); 

  return <div>Status: {status}</div>;
}

const fs = require('fs');
function readConfig() {
  const fileDescriptor = fs.openSync('config.json', 'r');
  // Missing fs.closeSync(fileDescriptor);
  return fs.readFileSync(fileDescriptor, 'utf8');
}
