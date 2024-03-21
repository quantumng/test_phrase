import {Configuration, LocalesApi} from "phrase-js"
import fetch from 'node-fetch';
// const globalAny = globalThis;
// globalAny.FormData = FormData

const configuration = new Configuration({
    apiKey: 'token 05fd0d49c40b90fb20c3983d314c075ce07716fa95ef0e0015d41c4b02174cbd',
    fetchApi: fetch,
    basePath: 'https://api.us.app.phrase.com/v2',
  })

const localesApi = new LocalesApi(configuration)

let requestParameters = {
    accountId: '37ed2c54a2cf87553028e4893bba4a58',
    projectId: 'dc37980e311cdb83ba1fe91a4df36f80',
    fileFormat: 'i18next_4',
    id: 'en-US',
}

try {
    const res = await localesApi.localeDownloadRaw(requestParameters)
    // console.log('res ---', res);
    console.log('res raw ---', res.raw.json().then(data => console.log('data ---', data)))
} catch (error) {
    console.error('error ---', error);
}
