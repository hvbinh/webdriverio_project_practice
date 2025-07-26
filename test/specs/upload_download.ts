
import fs from 'fs';

describe('table example',  function () {
    it('Verify can interact with table', async () => {
        await browser.url('https://demoqa.com/upload-download')
        await browser.pause(3000);

        // upload
        const filePath1 = await browser.uploadFile("test/data/sampleFile.jpeg");
        const filePath2 = await browser.uploadFile("test/data/sampleFile1.jpeg");
        const uploadFile = "input[id='uploadFile']";

        // 2. Upload file lên môi trường Selenium (remote browser)
        //const remoteFilePath = await browser.uploadFile(`${filePath1}\n${filePath2}`);
        const remoteFilePath = await browser.uploadFile(`${filePath1}`);

        await $(uploadFile).setValue(remoteFilePath);
        //expect(fs.existsSync(filePath)).toBe(true);
        console.log();
        

        //-----
        // download



    })
}) 