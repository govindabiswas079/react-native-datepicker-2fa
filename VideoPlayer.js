import React, { Component, useState, useEffect } from 'react';

import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, PanResponder, ToastAndroid, Dimensions, ScrollView, Pressable, } from 'react-native';

import Video, { VideoDecoderProperties, TextTrackType } from 'react-native-video';

const VideoPlayer = () => {
  const [onPlay, setOnPlay] = useState(true)
  const [orientation, setOrientation] = useState("PORTRAIT");

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  const isLandscape = () => {
    console.log('isLandscape')
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
  };

  useEffect(() => {
    Dimensions.addEventListener('change', ({ window: { width, height } }) => {
      if (width < height) {
        setOrientation("PORTRAIT")
      } else {
        setOrientation("LANDSCAPE")

      }
    })

    return orientation;
  }, []);



  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.fullScreen}>
          <Video
            source={require('./Kesariya.mp4')}
            style={styles.fullScreen}
            rate={1}
            paused={onPlay}
            volume={1}
            muted={false}
            controls={true}
            resizeMode={'contain'}
            fullscreen={false}
            fullscreenAutorotate={true}
            fullscreenOrientation={'landscape'}
            onLoad={() => console.log('onLoad')}
            onProgress={() => console.log('onProgress')}
            onEnd={() => console.log('onEnd')}
            progressUpdateInterval={1000}
            onError={(onError) => console.log('onError', onError)}
            onAudioBecomingNoisy={() => console.log('onAudioBecomingNoisy')}
            onAudioFocusChanged={() => console.log('onAudioFocusChanged')}
            onLoadStart={() => console.log('onVideoLoadStart')}
            onVideoAspectRatio={(data) => console.log('onAspectRadio called ' + JSON.stringify(data))}
            onReadyForDisplay={() => console.log('onReadyForDisplay')}
            onBuffer={() => console.log('onVideoBuffer')}
            repeat={true}
          // selectedTextTrack={this.state.selectedTextTrack}
          // selectedAudioTrack={this.state.selectedAudioTrack}
          />
        </TouchableOpacity>
        <View style={{
          height: 220, width: '100%', position: 'absolute', backgroundColor: 'transparent',
          justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'row',
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flexGrow: 1 }} />
            <Pressable onPress={() => isLandscape()}>
              <Text style={{ color: 'red' }}>next</Text>
            </Pressable>
            <View style={{ flexGrow: 1 }} />
            <Pressable onPress={() => setOnPlay(!onPlay)}>
              <Text style={{ color: 'red' }}>next</Text>
            </Pressable>
            <View style={{ flexGrow: 1 }} />
            <Pressable onPress={() => isPortrait()}>
              <Text style={{ color: 'red' }}>next</Text>
            </Pressable>
            <View style={{ flexGrow: 1 }} />
          </View>
        </View>
        <ScrollView>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptates excepturi aperiam temporibus nihil amet doloremque blanditiis rerum. Voluptatibus corrupti consectetur dolorum quis ipsum? Impedit quisquam ullam fuga necessitatibus aliquam aliquid voluptatibus eligendi velit minima in, ab inventore hic vitae recusandae ducimus tempore voluptatum rerum, quia quibusdam iste! Porro beatae, soluta rem rerum adipisci nemo asperiores, molestias optio nihil nulla dolores? Iure quasi incidunt perferendis dolor necessitatibus voluptatem sequi, neque quaerat expedita sit nam nulla dolorem delectus sed fugit porro aliquid, sunt, ducimus nemo! Nostrum, perferendis ad. Nemo quaerat aspernatur quasi velit saepe at veniam, fugit minus veritatis ut, consectetur aut laborum quis? Alias qui veritatis unde in necessitatibus vel odit quis deserunt quas! Error excepturi est aliquam, explicabo ducimus magni minima laboriosam esse eius ut quam reiciendis veniam molestiae eos suscipit! Id expedita odit enim nisi totam natus? Dolor inventore dolore sequi libero natus necessitatibus similique alias, facilis perspiciatis veritatis sunt nam ex unde assumenda! Ex atque odit assumenda quae ullam repudiandae sapiente minima earum dolorem vitae nobis repellendus, aspernatur, ut maxime in. Reiciendis quaerat dolores dignissimos ratione dicta vitae ad voluptatem ea tempore commodi dolorem vero quo, rerum eius error corrupti! Asperiores debitis minus adipisci reprehenderit molestiae? Incidunt iste quidem ad, doloremque dolorem culpa consectetur exercitationem eaque, tempora ipsam quod quae quasi explicabo neque sint. At quis temporibus ea, itaque laudantium doloremque aliquid eveniet unde atque officiis voluptatibus incidunt nihil recusandae eos. Praesentium modi dicta eligendi at repellendus inventore incidunt quaerat neque illum harum, fugit placeat ea non, pariatur quisquam, qui eius. Iste, delectus voluptates officia repellendus aperiam nesciunt dignissimos! Doloribus commodi temporibus atque voluptatem vel quis ratione vitae culpa corporis voluptas officia, ut dicta nemo quos facilis dolore labore! At dolorum asperiores eveniet consequatur optio praesentium? Saepe suscipit placeat nisi consequuntur, ipsa impedit inventore aperiam tempore veritatis hic sunt pariatur asperiores. Officiis pariatur dolore dolorum incidunt nisi consectetur harum, inventore molestias natus, id assumenda repellendus expedita necessitatibus ratione asperiores. Assumenda iste magni autem aperiam rem unde error labore nisi impedit enim repudiandae earum laboriosam numquam ratione cupiditate totam sint odio, provident praesentium vero voluptatem. Enim dicta officiis cupiditate quae. Ipsa laudantium earum cupiditate vitae aliquam quaerat necessitatibus, optio esse. Suscipit laboriosam quis odit fugiat, pariatur fuga deleniti vero consequuntur saepe sint, optio perspiciatis libero, quia reprehenderit? Reprehenderit quaerat cumque incidunt magnam voluptatem reiciendis animi cum vero blanditiis quidem provident laborum sint nihil eaque laudantium est doloremque mollitia pariatur, quisquam odit consectetur fuga sit deserunt dolorem! Sapiente necessitatibus, asperiores deserunt reiciendis modi atque officiis dicta nam facere dignissimos aperiam saepe consectetur perferendis molestiae tempora beatae ex perspiciatis cum magni? Hic ab esse adipisci ad expedita voluptate minus eligendi, explicabo laborum delectus maiores in nulla, accusamus nam. Fuga fugiat officiis, dolorem aliquid corporis incidunt beatae nostrum. Tenetur laboriosam, repellendus, earum dignissimos provident, odit delectus recusandae quaerat dolore doloremque blanditiis ullam libero veniam nihil nesciunt placeat. Esse accusamus corporis vero? Voluptatum suscipit commodi eius beatae sequi laborum porro nam animi, veniam debitis culpa numquam ipsam. Animi beatae, dolore ratione minus at officiis cupiditate neque fugit ex a, quia illum dicta blanditiis sit obcaecati, rem earum sint facilis omnis adipisci magni? Facere est exercitationem praesentium hic voluptas ab vero vitae velit deserunt autem ad cum dolore voluptates nulla quasi, nemo ratione quae? Mollitia dicta tempora in commodi fugit sapiente explicabo qui eaque corrupti eos, voluptatum esse alias. Illo ipsa error dolor numquam? Est recusandae mollitia architecto quasi necessitatibus quia iste fuga consectetur exercitationem et rerum itaque culpa veritatis sit magni enim rem maxime, minima delectus natus voluptate dolorem repellat. Delectus eius ducimus velit laborum voluptatum labore quod culpa voluptate cumque iusto harum cum ipsam sit, numquam sint nam nemo tenetur, dolores non amet ullam aspernatur vel animi nostrum? Quae dolores culpa molestiae hic fuga tempora numquam! Velit iusto consequatur facere eveniet dolores id aliquam quod est, optio voluptates soluta, ullam quam a, quia consequuntur dignissimos aut ab iure ipsam dolorum alias corrupti culpa blanditiis explicabo. Minima repellendus reprehenderit perferendis. Nobis voluptatum porro sint, quisquam dolorem deserunt, rem dicta nam aliquam magnam molestiae libero provident nesciunt ipsum impedit tenetur facilis corporis asperiores in culpa saepe vero quibusdam cumque distinctio! Ad ipsam non cupiditate ipsum aut reiciendis nesciunt autem, deserunt alias temporibus dolorum exercitationem quo rerum sapiente maxime? Quis, soluta aliquam doloribus illo ratione, commodi facilis omnis vitae beatae tenetur vel. Est nobis distinctio praesentium harum eius, quibusdam tempora quis inventore ipsam enim. Natus, animi accusantium quas quos at rerum. Accusantium dolor explicabo nostrum autem nihil culpa iure, voluptas eos iste, provident veritatis voluptatem, dolore obcaecati voluptate. Laudantium magnam in autem sequi sunt quos, doloribus adipisci fuga suscipit illo cupiditate tenetur vero recusandae repudiandae aliquid, porro distinctio nemo alias voluptatibus ipsam omnis blanditiis dicta ipsa eveniet! Doloremque eos iste, aut velit perferendis voluptatem saepe vel, praesentium adipisci repellendus iure, odit quisquam? Enim, unde ut consequatur, facere, quasi similique asperiores magnam ipsa ad nemo maxime ullam. Officiis, recusandae! Soluta quas asperiores, doloribus dolor perspiciatis, alias, expedita corporis quae at quis exercitationem voluptas. Animi fugit minus consequuntur architecto! Quod, atque sint, soluta facilis deleniti labore in explicabo cupiditate dolore architecto eos. Laborum, tempora. Voluptatibus voluptate adipisci debitis perferendis pariatur quas iure et voluptates tenetur ullam, fugit reiciendis, delectus iusto? Nihil natus quia ab corrupti doloremque fugit veniam dolorem atque praesentium? Voluptate eius dolores sed voluptatum laborum repudiandae illo, tempora natus ab quibusdam porro est soluta iure provident id non atque, vero similique laboriosam accusantium cupiditate commodi facere! Ut doloremque mollitia culpa ducimus obcaecati commodi nihil. Accusantium iusto eveniet vitae pariatur laudantium reprehenderit facilis magni veritatis, optio minima saepe ut natus reiciendis tempore dolorum, ea dolorem enim tempora rem fugit. Nulla quaerat sit voluptates beatae nobis, exercitationem maiores ipsum debitis impedit id blanditiis sunt itaque rerum enim harum pariatur est dicta dolor a distinctio aliquid temporibus nam tenetur? Totam porro a nam vel quos architecto cupiditate cumque natus quasi illo, aperiam ratione tenetur. Magnam adipisci cumque suscipit deserunt libero est rerum culpa dolorem? Necessitatibus reiciendis beatae dicta amet pariatur velit explicabo tenetur quos, rerum minima expedita officiis omnis saepe minus est perferendis, laudantium at aut modi enim nulla! Laboriosam, assumenda accusamus molestiae necessitatibus nemo architecto quae rem reiciendis unde voluptates? Blanditiis minus eligendi, illum magni libero ipsa sunt quod veniam iure? Expedita, necessitatibus? Nesciunt magni consectetur sit, ipsum deserunt officiis tempore vero earum maxime quod placeat nisi ab adipisci praesentium hic perferendis ad eligendi perspiciatis fuga? Deleniti, inventore. Qui ex, illo facilis in magnam aliquam culpa quaerat laborum, eaque sapiente minima libero eos reiciendis tempora pariatur provident esse magni reprehenderit et modi voluptatibus quas nesciunt assumenda maxime? Similique molestias, perferendis exercitationem quibusdam voluptas neque quaerat cupiditate veniam voluptatibus, nulla, nemo amet voluptatem quisquam. Itaque, saepe temporibus? Repellat deserunt debitis cum in quaerat, dolor animi nam excepturi asperiores voluptatum maxime, aspernatur dolores necessitatibus fugiat iste. Doloremque, fugit? Ad deleniti necessitatibus, ducimus facilis aspernatur totam libero quam excepturi mollitia minus aliquid animi alias repellat quis eaque repudiandae! Perferendis optio obcaecati minus minima molestias voluptates, corporis, ratione soluta repellat laboriosam saepe. Consequuntur at magnam tempore delectus. Quis suscipit, consequuntur sunt laudantium praesentium soluta veniam adipisci porro, unde aperiam, sit odit libero sint labore ex exercitationem amet distinctio quo quibusdam molestiae beatae. Beatae culpa temporibus veniam est laudantium, tempora similique, quo nostrum commodi magni libero odio exercitationem. Nihil facilis voluptas corrupti iste est impedit explicabo eum tempora illum aliquam maiores quisquam consequatur quasi sint deserunt tenetur laudantium, hic voluptatibus magni non, dicta quo distinctio inventore? Ducimus quidem maxime inventore voluptates quis in quas nemo fugiat enim vitae iste voluptas totam consequuntur, minima nisi molestias quibusdam dolor repellat at nulla. Obcaecati odio repudiandae consequuntur laborum modi nesciunt fugiat ratione voluptatem eaque, sequi, minus, facilis tempora distinctio cupiditate eius nobis neque cumque atque fugit quia non repellendus nisi numquam! Repellendus, voluptas? Nisi, error accusantium quod eos fugiat nostrum odio consectetur, iure, minus voluptate id impedit perspiciatis? Sapiente non eveniet veritatis tenetur rerum, doloribus ipsum vero nesciunt atque cumque itaque natus ullam ducimus, id at saepe. Maxime quibusdam delectus molestias ut quo ab iste suscipit autem? Obcaecati ut corrupti modi illum, fugit, aperiam recusandae eaque unde magnam consectetur culpa velit libero consequatur repellat sed hic doloribus quia asperiores. Earum doloribus quod debitis, sapiente laboriosam veritatis totam odio nobis repellat sequi. Voluptates, omnis. Saepe et consequuntur sed! Cupiditate adipisci assumenda magni, totam tempora quos! Ut architecto tempore odio labore voluptate repudiandae officia sunt veritatis similique debitis velit qui necessitatibus quasi cumque fugit, dolorum dolores? Placeat accusamus eligendi modi ut perspiciatis at aliquid non, optio neque consequuntur, possimus saepe doloribus culpa voluptate qui molestiae aspernatur harum perferendis quas sit dolore. Ipsum ea vitae alias, accusamus iure necessitatibus dolores maiores eveniet! Nemo perferendis distinctio fugiat cupiditate! Eligendi, totam, perspiciatis, voluptate quidem fuga tenetur explicabo excepturi inventore maxime deserunt illum error! Suscipit in expedita nemo voluptas molestias quis mollitia, quas quaerat quisquam nisi laborum odit ipsum obcaecati excepturi magni, consectetur earum, delectus a iusto praesentium voluptatem vitae quam unde! Sint voluptates expedita, aperiam voluptatem odio illum necessitatibus velit rerum nemo fugiat vel facilis placeat, dolores ratione perferendis cumque eum consequuntur animi consectetur cum similique. Quae ducimus nulla, vero, rerum numquam amet qui ea nobis consequatur vel laudantium facere quisquam ipsa totam, incidunt dignissimos mollitia adipisci esse! Expedita assumenda doloribus deserunt aperiam asperiores consectetur. Cum suscipit magni, eaque cupiditate impedit laboriosam odio fugiat nihil iusto quidem autem velit cumque doloribus sit natus temporibus recusandae maiores amet deserunt sapiente vitae assumenda optio. Blanditiis tempora quis fugit tenetur reprehenderit, magnam architecto deserunt magni minima eaque temporibus nam corporis nobis enim animi. Exercitationem itaque quisquam minima nulla eligendi! Velit reiciendis dignissimos nisi vitae hic? Nulla facilis quis tenetur saepe molestias praesentium iure corrupti modi laborum consequatur consequuntur necessitatibus nihil iusto quia quo dolorum architecto aperiam minus unde, reprehenderit ab commodi repellendus, debitis dolor? Expedita inventore, voluptate mollitia doloribus ducimus sequi suscipit iusto dolores quam facilis, nemo explicabo eos reiciendis qui dignissimos dolorem reprehenderit. Assumenda dolorem laboriosam tenetur. Facilis omnis blanditiis assumenda obcaecati? Qui ex architecto, corporis ipsam ipsa velit maxime dicta magnam vel et quos nemo in voluptas quae iure. Ab impedit mollitia autem quisquam quae fugiat accusantium laborum veniam vero nam qui dolor, nobis beatae atque iste aut saepe quo neque ut tempore numquam. Eum, provident maxime non aspernatur unde quibusdam! Aperiam aut placeat obcaecati deserunt, molestias libero ex illo provident, vel quaerat ratione culpa debitis earum eius, veniam fugit? Accusantium, repellat quo eaque debitis vel amet earum fugiat cum incidunt eveniet nisi repellendus consequatur molestias, a rerum nam, ullam dolor sed voluptatibus adipisci vitae enim dolores? Odit numquam facere vitae ducimus harum vel rem doloremque, delectus ipsam dolores dignissimos consequuntur dolorum labore laborum cum pariatur explicabo reprehenderit quidem deserunt voluptates. Incidunt, deserunt tenetur dolor dignissimos ullam numquam, recusandae nobis assumenda architecto, doloremque suscipit non hic. Sint vitae, enim in dolores accusantium eligendi vel ea quia rerum sapiente! Quod sint maxime dolorem iure, porro sunt eos excepturi earum nihil, repellendus eaque. Vero dolorem animi fuga odit harum illum a iste mollitia. Tempora quasi amet totam ex optio sint quidem nemo vero officia aut! Quibusdam, sint neque animi quo accusantium assumenda porro cupiditate, veniam mollitia eius dolorum unde! Culpa, quaerat. Magni sint molestiae ducimus eos ullam accusantium minima voluptatem tempora explicabo commodi, reiciendis voluptatibus, veniam id rerum dolorum perferendis officiis rem sed, modi saepe libero odit obcaecati. Voluptatibus tempora impedit quam quisquam recusandae ducimus sapiente neque ad omnis voluptatum ipsa corporis exercitationem eveniet, nostrum libero, soluta aliquid eius? Ipsa, officiis reprehenderit? Placeat rem tenetur consectetur quasi recusandae. Qui provident beatae totam doloremque? Iusto iste explicabo maxime ipsam harum illum nulla dolorem excepturi quos, consectetur quae nesciunt. Voluptates id dolorem voluptatem provident nostrum aperiam hic est reiciendis perspiciatis, sed consectetur omnis iste. Iste, nulla voluptatum ipsam soluta suscipit dignissimos dolorum repellendus culpa eligendi ex dolore architecto nihil accusantium dolorem. Vitae incidunt quo debitis neque eum illum provident deserunt doloremque porro rem temporibus odit minus, laudantium accusamus cupiditate eos, ad qui ipsa earum. Cumque maxime temporibus dignissimos voluptates unde nobis rem alias aliquam iste eum? Quam vero quas aliquam minus, fugiat maiores exercitationem.
          </Text>
        </ScrollView>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullScreen: {
    //position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: 220,
    zIndex: 9999,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default VideoPlayer