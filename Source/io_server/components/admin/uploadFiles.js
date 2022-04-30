const path = require('path');

var uploadFiles = function(req, res, fileType){
    
    let dataFilePath = path.join(__dirname, "..", "..", "storage", "admin", "adminCSVFiles", fileType + ".csv");
    let query1 = `START TRANSACTION;  TRUNCATE TABLE ${fileType}; LOAD DATA LOCAL INFILE '${dataFilePath}' INTO TABLE ${fileType} FIELDS TERMINATED BY ','ENCLOSED BY '''' LINES TERMINATED BY '\n' IGNORE 1 ROWS; COMMIT;`;
    dbPool.query(query1, (error, results, fields) => {
        if (error){
            console.log(error);
            res.send("ERROR");
        }
        else{
            res.send("ACKNOWLEDGEMENT");
        }
    });
    
}

module.exports = uploadFiles;