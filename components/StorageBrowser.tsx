import React from 'react';
import { createAmplifyAuthAdapter, createStorageBrowser } from '@aws-amplify/ui-react-storage/browser';;
import '@aws-amplify/ui-react-storage/styles.css';
import { Amplify } from 'aws-amplify';
import config from '../amplify_outputs.json';

Amplify.configure(config);

export const { StorageBrowser } = createStorageBrowser({
    config: createAmplifyAuthAdapter(),
});