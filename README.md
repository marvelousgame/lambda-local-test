# lambda-local-test



### demo(nodeJS)

```
$ npm test

> lambda-local-test@1.0.0 test /lambda-local-test
> node lambda.js

lambda start
{ Records:
   [ { EventVersion: '1.0',
       EventSubscriptionArn: 'arn:aws:sns:EXAMPLE',
       EventSource: 'aws:sns',
       Sns: [Object] } ] }
[OK] completed!
```



### demo(Python)

```
$ python lambda.py
{
   "Records": [
      {
         "EventSource": "aws:sns",
         "EventSubscriptionArn": "arn:aws:sns:EXAMPLE",
         "EventVersion": "1.0",
         "Sns": {
            "Message": "Hello from SNS!",
            "MessageAttributes": {
               "Test": {
                  "Type": "String",
                  "Value": "TestString"
               },
               "TestBinary": {
                  "Type": "Binary",
                  "Value": "TestBinary"
               }
            },
            "MessageId": "95df01b4-ee98-5cb9-9903-4c221d41eb5e",
            "Signature": "EXAMPLE",
            "SignatureVersion": "1",
            "SigningCertUrl": "EXAMPLE",
            "Subject": "TestInvoke",
            "Timestamp": "1970-01-01T00:00:00.000Z",
            "TopicArn": "arn:aws:sns:EXAMPLE",
            "Type": "Notification",
            "UnsubscribeUrl": "EXAMPLE"
         }
      }
   ]
}
```

