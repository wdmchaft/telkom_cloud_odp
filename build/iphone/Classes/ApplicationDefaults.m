/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"ureJ6BlX90mWlLHPNYZvYgKtHUekNlqR"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"VWIkWBBFOr7m2Uz2jsAirONMsUg7MYcP"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"c2uRV7XN02AlVWk9arLN9ogEBt8nZBMb"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"q0cRS8nOx8QsT9rYtgXOyqlhDfSsotvx"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"8N3scz5iUHR7oIsKo82Ad7duQ1vcvtfs"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"CjhomqTtcbdqBWBCHwsUPdLpmngiXatP"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
