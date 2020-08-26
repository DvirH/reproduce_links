const createReport = require('docx-templates');
const fs = require('fs');
const template = fs.readFileSync('./template.docx');

createReport.createReport({
    template,
    data: {
        opportunities: [
            {
                title: 'title1',
                country: 'country 1',
                lastSubmissionDate: '15.07.2020',
                link: 'https://www.facebook.com',
                linkText: 'click here',
            },
            {
                title: 'title 2',
                country: 'country 2',
                lastSubmissionDate: '15.07.2020',
                link: 'https://www.google.com',
                linkText: 'click here',
            }
        ],
    }
}).then(buffer => {
    fs.writeFileSync('report.docx', buffer)
    res.json({})
})