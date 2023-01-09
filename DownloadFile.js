import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Pressable,
  Modal,
  Linking,
} from 'react-native';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';

const DownloadFile = () => {
  const [getProgress, setGetProgress] = useState(0)
  const [modalProgress, setModalProgress] = useState(false)
  const [onCancle, setOnCancle] = useState({})
  const [downloadInfo, setDownloadInfo] = useState({})

  const onDownloadImagePress = async () => {
    await RNFS.downloadFile({
      fromUrl: 'https://cartographicperspectives.org/index.php/journal/article/download/cp43-complete-issue/pdf/2712',
      toFile: `${RNFS.DownloadDirectoryPath}/react-native.pdf`,

      background: true,
      discretionary: true,
      cacheable: true,

      // progressInterval: 3000,
      // progressDivider: 10,
      begin: (res) => {
        setOnCancle(res)
      },
      progress: (res) => {
        setModalProgress(true)
        let progressPercent = (res.bytesWritten / res.contentLength) * 100;
        setDownloadInfo(res);
        setGetProgress(progressPercent);
        console.log(progressPercent)
      }

    }).promise.then((res) => {
      console.log("res for saving file===", res);
      // readFile(`${RNFS.DownloadDirectoryPath}/react-native.pdf`, "base64");
    })
      .catch((err) => {
        if (err.code === 'EUNSPECIFIED' && onCancle?.jobId === -1) return;
        // console.log("Cancelled : " + JSON.stringify(err))
      })
  }

  const onDownloadStop = async () => {
    await RNFS.stopDownload(onCancle?.jobId)
    RNFS.unlink(`${RNFS.DownloadDirectoryPath}/react-native.pdf`)
      .then((ress) => {
        setGetProgress(0)
        setModalProgress(false)
        setOnCancle({})
        setDownloadInfo({})
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return 'n/a';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
  };

  var date = new Date();
  var path = RNFetchBlob.fs.dirs.DownloadDir + '/filee' + Math.floor(date.getTime() + date.getSeconds() / 2) + '.pdf';

  const DwonLoadCertificate = () => {
    RNFetchBlob
      .config({
        fileCache: false,
        addAndroidDownloads: {
          useDownloadManager: true,
          title: 'TrackoLet Certificate',
          description: 'File downloading',
          path: path,
          mime: 'application/pdf',
          mediaScannable: true,
          notification: true,
        }
      })
      .fetch('GET', `https://cartographicperspectives.org/index.php/journal/article/download/cp43-complete-issue/pdf/2712`)
      .then((res) => {
        let base64Str = res.data;
        //RNFetchBlob.android.actionViewIntent(path, 'application/pdf')
      })
      .catch((errorMessage, statusCode) => {
        console.log('errorMessage', errorMessage);
        console.log('statusCode', statusCode);
      })
  }

  const onOpen = async () => {
    RNFetchBlob.android.actionViewIntent(`${RNFS.DownloadDirectoryPath}/react-native.pdf`, 'application/pdf')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Modal visible={modalProgress} transparent>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#6b7eb5c7' }}>
          <View style={{ height: 200, width: '90%', justifyContent: 'center', alignItems: 'center', borderRadius: 5, backgroundColor: '#ffffff', elevation: 12, paddingHorizontal: 10 }}>
            <Text style={{ color: '#000000' }}>Progress: {getProgress.toFixed(0)} %</Text>
            <View style={{ height: 20, width: '100%', elevation: 12, backgroundColor: 'gray', borderRadius: 3, marginTop: 60 }}>
              <View style={{ height: 20, width: `${getProgress.toFixed(2)}%`, elevation: 12, backgroundColor: 'blue', borderRadius: 3 }} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
              <Text style={{ color: '#000000' }}>{bytesToSize(downloadInfo?.bytesWritten)}/{bytesToSize(downloadInfo?.contentLength)}</Text>
              <View style={{ flexGrow: 1 }} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}>
              <Pressable onPress={onDownloadStop} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 10 }}>
                <Text style={{ color: "#ffffff", fontWeight: 'bold' }}>Cancle</Text>
              </Pressable>
              <View style={{ flexGrow: 1 }} />
              <Pressable onPress={() => setModalProgress(false)} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 10 }}>
                <Text style={{ color: "#ffffff", fontWeight: 'bold' }}>Hide</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Pressable onPress={onOpen} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 10, marginTop: 10 }}>
        <Text style={{ color: "#ffffff", fontWeight: 'bold' }}>Open</Text>
      </Pressable>

      <Pressable onPress={onDownloadImagePress} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 10, marginTop: 10 }}>
        <Text style={{ color: "#ffffff", fontWeight: 'bold' }}>Download</Text>
      </Pressable>

      <Pressable onPress={() => setModalProgress(true)} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 10, marginTop: 10 }}>
        <Text style={{ color: "#ffffff", fontWeight: 'bold' }}>Show Download</Text>
      </Pressable>
    </View>
  );
}

export default DownloadFile