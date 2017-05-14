import json

def pp(obj):
     print(json.dumps(obj, sort_keys=True,indent=3, separators=(',', ': ')))

def lambda_handler(event, context):
    pp(event)
    return "DONE"
