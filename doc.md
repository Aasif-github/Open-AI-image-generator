step 1:
https://platform.openai.com/docs/api-reference/authentication

step 2:
create secret key
https://platform.openai.com/api-keys

step 3:
About image generator
https://platform.openai.com/docs/guides/images?context=node&lang=node.js

// https://platform.openai.com/account/organization

/*
const openai = new OpenAI({
  organization: 'org-QO9VMiDePdtNCJsbbxvBNEeO',
});

const response = await openai.createImage({
    model: "dall-e-3",
    prompt: "a white siamese cat",
    n: 1,
    size: "1024x1024",
  });

  image_url = response.data.data[0].url;

  
console.log('Open AI');

*/



Success Response

```json
ImagesResponse(created=1701994117, data=[Image(b64_json=None, revised_prompt=None, url='https://oaidalleapiprodscus.blob.core.windows.net/private/org-9HXYFy8ux4r6aboFyec2OLRf/user-8OA8IvMYkfdAcUZXgzAXHS7d/img-ced13hkOk3lXkccQgW1fAQjm.png?st=2023-12-07T23%3A08%3A37Z&se=2023-12-08T01%3A08%3A37Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-12-07T16%3A41%3A48Z&ske=2023-12-08T16%3A41%3A48Z&sks=b&skv=2021-08-06&sig=tcD0iyU0ABOvWAKsY89gp5hLVIYkoSXQnrcmH%2Brkric%3D')])
```

# 
```json
If billing is not done
```json
BadRequestError: 400 Billing hard limit has been reached
    at APIError.generate (/home/mzq163/development/sample-work/node/openAI/node_modules/openai/error.js:44:20)
    at OpenAI.makeStatusError (/home/mzq163/development/sample-work/node/openAI/node_modules/openai/core.js:263:33)
    at OpenAI.makeRequest (/home/mzq163/development/sample-work/node/openAI/node_modules/openai/core.js:306:30)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async /home/mzq163/development/sample-work/node/openAI/index.js:18:19 {
  status: 400,
  headers: {
    'access-control-allow-origin': '*',
    'alt-svc': 'h3=":443"; ma=86400',
    'cf-cache-status': 'DYNAMIC',
    'cf-ray': '875badf7c9807fec-MAA',
    connection: 'keep-alive',
    'content-length': '172',
    'content-type': 'application/json',
    date: 'Wed, 17 Apr 2024 10:19:55 GMT',
    'openai-organization': 'user-g2nxd7iqtbqfzkmlqw7iuywc',
    'openai-processing-ms': '134',
    'openai-version': '2020-10-01',
    server: 'cloudflare',
    'set-cookie': '__cf_bm=hnUQhFGQ3v499L3gjt1DRUmKUoaH1SRG76RDeAynV20-1713349195-1.0.1.1-CF7kx5.sMsC5iTa.RBu7MFfxKcfT1eQ2DwPpULjiNjW68E3fr2ARaQ84zzokWiJHJySVwjOMRrFgPuTeODhkOQ; path=/; expires=Wed, 17-Apr-24 10:49:55 GMT; domain=.api.openai.com; HttpOnly; Secure; SameSite=None, _cfuvid=fod13DNly1r9EFygLSvUizy6sjqLnUswKJUFOP34XAs-1713349195891-0.0.1.1-604800000; path=/; domain=.api.openai.com; HttpOnly; Secure; SameSite=None',
    'strict-transport-security': 'max-age=15724800; includeSubDomains',
    'x-request-id': 'req_b924027b4083ce07288982f96ea4f7ce'
  },
  error: {
    code: 'billing_hard_limit_reached',
    message: 'Billing hard limit has been reached',
    param: null,
    type: 'invalid_request_error'
  },
  code: 'billing_hard_limit_reached',
  param: null,
  type: 'invalid_request_error'
}
```