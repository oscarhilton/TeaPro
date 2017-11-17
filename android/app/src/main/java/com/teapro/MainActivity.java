package com.teapro;

import com.facebook.react.ReactActivity;
import com.burlap.filetransfer.FileTransferPackage;

// mReactInstanceManager = ReactInstanceManager.builder()
//     .setApplication(getApplication())
//     .setBundleAssetName("index.android.bundle")
//     .setJSMainModuleName("index.android")
//     .addPackage(new MainReactPackage())
//     .addPackage(new FileTransferPackage());

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "TeaPro";
    }

}
