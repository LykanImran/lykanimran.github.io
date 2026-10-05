'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3d627fd43d5a85c3b46f51bc021c451c",
"version.json": "7afc8f07cbd1a443c32ed7dc16a58c00",
"index.html": "72a050debd8540f2bc538aa1a64daaab",
"/": "72a050debd8540f2bc538aa1a64daaab",
"apple-touch-icon.png": "064c25e778ac09510069fdbc42798050",
"main.dart.js": "987d35c49d0730dc297532ad7d350f3d",
"404.html": "5e335df9c1c99582f1c99afe7182e8fc",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "25c251c8d1ba61f7920419e4afc92409",
"icons/Icon-192.png": "423f7aeff13f38a4974ada9c498ddd70",
"icons/Icon-maskable-192.png": "356c8467de0e976d48acd4bab15917d2",
"icons/Icon-maskable-512.png": "8a944306778ab2250ad1100acbcf4ddc",
"icons/Icon-512.png": "a6533d4e599fd030dd1b6b608f2f8be1",
"manifest.json": "a939fd2495ec538f2cd92337f2234242",
".git/config": "ea329d71a83b073125713f3b9845c703",
".git/objects/95/b344ad264b06707e9468a3ccbd6bc7fbaa96a2": "bcbbbc6bb5d3a0014464c2c3a3ca2992",
".git/objects/66/64dcb4d12668c49ed3c1cabe62568c2c38b1c3": "369e8933be78a841580732f866ae23d6",
".git/objects/68/4ebd569fbeb890b1d8d3ce73cfdf3bb4d78022": "5426d825b86be5392670df2e71e30aa0",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/6a/6610eae342fe7dacf64537d4362b5d1d225b95": "e3b99735c6a5ee77b056ce602ec03cea",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/51/c08e9addedefbe32aa272359593b5068d6952d": "6529dec1d450ca0f4a7aacec94195308",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/58/fb6beb43b627e39d42d05de67259fa4f2c2370": "1cef5df9d261a1f0f1ff17e674c2725c",
".git/objects/58/00b774b3ca6cbd3a77b78a96df9d513e4d15e1": "925c4fc3378b3762018541b376920d51",
".git/objects/58/d1b19feee59866ca804343608aaaa76178125e": "1e14d9bb2c38473270c507ea0d408ac8",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/60/d7014036b71607cbf18c77d83c56f12d67a1ca": "ba9b541d44ad710fe1d81404b2225aba",
".git/objects/a3/b9725e1cd8d9bdf8aa4b609fd332df1b786c3c": "495873d2986144b77b19a6f7e61b7429",
".git/objects/b2/65ed4d1aeed8cefebd1168b81a6ffb368b0cdb": "1bb905c1172188cf1c3a2e9fa123dccf",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/d7/b35ec47b5814344571558da2e3204044eb909f": "7961957ef945c2f5d8d56ac245a2fe33",
".git/objects/d7/840f486d149177a15c91e62e0a7273499a317a": "5fa403ab7d223dd764beaa9f3a36a1f9",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/b3/b68be9a83b84ef86d60e0d730b435a0a90cece": "1e2c6ba629a7edb6edb6de89861422a2",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/a2/3bbea6f67c6631fb601be728be989d84e9b91a": "2abc5a1a9467f5f3f3d44a4a4d0ee653",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f4/3e6f263a6ca94406b2d1944af31c723e6c6c8d": "ffdb28c015a1051b8ec7e23dbc78f930",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/8a8c5d418cb4c2b2252553a37c448fc4e79b30": "534c05a3e3224c2b21e2508cdf4aafbd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/f53293316a6ca694ade74bbbbcdec7905adb0a": "debd938f57e34f903717af1433503b80",
".git/objects/fc/cda22f345201ff58259a2bfcc9dd21e8225883": "ea5910829a473af79331b3f664bace2b",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/36ec62472f7b414b30cfb4225277f8217f8087": "922933d74702a5bc69587d55374b5000",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/fb/6f6c95c9529a2a213351011c8f9497c54295f5": "67c16c620fb9f844663e6a36b6817edd",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/73/4b6882fc994c79816a9ccd546ff04985d8184a": "9df5f2cc06c625cc2253610ba00e5243",
".git/objects/87/1905f7826c50d7ec8ab1e3d361be62026b975d": "fa88f8100d172a021be4756d91e59758",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/80/c9aa296b2b440994ad8b0e4e19792e8f00fee3": "35c9af7257dc656370fac6050da4b36d",
".git/objects/1a/277e2e4e3c0d39ed798f24a24f122cca75519f": "05c4088568e15198c7d4b82f269f7ae1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/7bd0d9e06cfd735b65f6f0485b3e2ea2b70bcb": "651bb8614cc1cb1a9998d3d9ca5f0449",
".git/objects/4c/bb5ebea9ebc55c1c39757d4ebf9fcfbc2cb5ff": "05db7120cf549466f7d8eb6ef4f07467",
".git/objects/81/7bdf5a2d22f2be4288ef846d6c72c957ffe97d": "0354e45453ce4f02bc63d8d7df0b9e75",
".git/objects/86/3a44e3670a46c2cbd99d51ca1bb4705c3a1ddf": "1a3d6c11e419ad17f42cd9c9452f869f",
".git/objects/72/7c3cb721dd33abd674a8f166628de3f7617646": "f9e1694120b51f1cd6c02d79fc667ab7",
".git/objects/44/7daa48bedbfb278d1f5f4d3a24979bb0f4ca9c": "7288e9b8ec06f821181980ece6ab2bf6",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/3572264efa1605fce5cc7773917cebf140bb6b": "e5a8794fac3b12150b5fa6bf21234c7c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/e7ba0dde4ff6a3990bebca1fab485e0dd7605c": "8e8597f8c7a3ce4b503b86f492d427e7",
".git/objects/36/53c6cb4fbcb6a0d3e1052931d93dfb057ff3ee": "84590c95818c0fb2f194d4c3d641f396",
".git/objects/96/00ac3ca56be4ccf69354b7936bc2a47a421e9f": "0adf59d180814013c26f489aacdfb80d",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/e99bb1872c58abdac1d7a258a753d7e7e3d18b": "32074212e15655247aacd5a1892318d8",
".git/objects/54/bfffb8f5ca71229763c9b508a739d92f596f31": "2d8fb57623fa174906b136885c6eb668",
".git/objects/30/6942dc5bda024438722d4da845f397d2b10e14": "682a06660c7a1bece06811374e7444ab",
".git/objects/5b/182a41cdd113444008cd8644498c5b4482dd79": "1e245fe5baabfad8069fa7ee031c6a5d",
".git/objects/37/95094735a15ef8aeb62dec3e6c579c0d42c2f5": "e7eed602cef166a04f062b53bb0ab593",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/6d/f2b253603094de7f39886aae03181c686e375b": "4e432986780adf1da707b08f0bc71809",
".git/objects/6c/af111b70a5c26bef0b3e832fd1159fdec7886c": "6e508e71c92d020fe3cc97b8290cf7d4",
".git/objects/6c/5688a17cb85a16a48904732c2c7588caaa111e": "44edbfbb01c292c2ca384d60d2a29013",
".git/objects/39/e31e1cd9882849ae26f58d61470da31d30a9f9": "88b160d5b474545a1329c7a65b425158",
".git/objects/55/a39b270dbab2fbb592c3ab5147456a31bb79c4": "a2c4b99df65e2e20490d16268cd35815",
".git/objects/55/1bc2fba6cfc33f106ebd84ac2923064566f6c0": "e396979e351c15f0867c2e9df84324bb",
".git/objects/97/b6eee463de5e4fcf79c6570e4173f50eca81d5": "b58977ec52e0607f13c5710fd432ef21",
".git/objects/0a/9cae1a999edc87350bd0e59fdd73d527cacd47": "960a6a31e4c2897b77ec0c5447e2b28a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/de59a22978cb5db829b460b28df4d14c7aea9c": "bede8fe810d6a45fe1827b2029a09af5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/a8/a8db3a861b3b44781979228d7e954584139a2b": "849594bcb70dc4377f0b1dbe1d62c6df",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/f3492df2246ac74a35c1cf49ec8590c46f0c37": "89496a3087b2c3dbecc6c6bc2f6dfa53",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ef/1e669726eb1a5a7d880fd733e3eed8473a0263": "cfff41c5d3076ff07f5a1255c538a8e2",
".git/objects/c4/9aa7de5fdae2c6d51f5cbd49cc84dfd62aaf8c": "45e1dc59438a52fbea66294e5fdf92ab",
".git/objects/cd/763970b04084f159f87700423339f2c1168bf4": "8f2c24cfe82faae190b71f6cca4e6be7",
".git/objects/cd/09da8550c7c6d004430555d2504d1b4ab63c5c": "46c7dd5a1a4710c73470dca210f178eb",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f7/c26f0eae03687aa8588ceaa88695b95ef8cd7d": "9f056623db829d9f0d31dcd0828cd6b1",
".git/objects/e8/a59023ee0c985a2671a3d600933f009a1edcc7": "a3a7a8db3dbdfdfc74de3cab1165d2a0",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/f8/3e9b61e54f368a7ab90d68f27312daf3c8e9b5": "286f8f1656ac0e320e77f3d777d49118",
".git/objects/e0/04a7868665cb99110b53bef030ccf2cba99388": "b5ae6a98e01a31ac7ffb0fa2cb50abce",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/79/37b14dec1a608305f154f7b3311941ae0820de": "58be98c1dcd22800f9f8525165817a6d",
".git/objects/1b/f662e80d9b344de1921cacf5594e7cb186dd81": "edebae00a794b670c5e02ad63abb8e92",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/23/340f67a367b8388b47dc63a28d371d71143b21": "554fdb8b073c7fcbeee8c5c65d670f2b",
".git/objects/23/815017503f7da2b2845eb7e3e04cf787ddd227": "0ee816698fec3cb724515cbbbf0d93b2",
".git/objects/4f/c9fbbef237d14021a736c03e712049123cc3dc": "df3c24603f102647d6b26c8beb8dba4d",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/15/f91c5431f90b4695f0c31e7b45737cf497ee13": "1425aab35f8e038222b0567b576c4724",
".git/objects/85/93009c12ee1752baed3603c0954eb98994c401": "fa94377fbeff3af67c872bf58199cef4",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/71/3b1ee45c49b52517b98787fea3c45d05e4d2cd": "b25e0513ce788e7b338e2ab9cb99898a",
".git/objects/82/f43278cf6162b49df2022804682b30a3f176be": "2d1dd310af370f636e73b2a0841cfec6",
".git/objects/82/039646eae58381941a128edf3dd254c98a2961": "ba71a4099c57c699fe2ac9b609735b8e",
".git/objects/7f/80ebdcf887d7ebd4a40e42817c4b5b5df88280": "875d704dd904ec7bbf6b0b00613546cc",
".git/objects/7a/a75fafe93bf7d91cceb9f33c1249d082dffd9a": "c628523ae05435602879ea05d4efec13",
".git/objects/8e/3d75564b0e271bbd44b7edc59707bcfe55dbab": "0898a700630c0c33d8b2c56ef4cb9438",
".git/objects/25/51cccf05049b4477b48dbe99872ccdef0eda72": "7eeabb64f4fe555bffecd44671adb615",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "650797732f838767b28d6221dc3918be",
".git/logs/refs/heads/main": "650797732f838767b28d6221dc3918be",
".git/logs/refs/remotes/origin/main": "ff028f90977f9fcac90905fdb4d0e2e5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "94530708de2d35f6fbc2efc4761c656c",
".git/refs/remotes/origin/main": "94530708de2d35f6fbc2efc4761c656c",
".git/index": "c167c4db2fa1a86c8be5a6842beec51d",
".git/COMMIT_EDITMSG": "a2e0feb4faac634b7cd47a22484bc5db",
"assets/NOTICES": "7f564ad6bfaa5482d2c1e4ae8332812f",
"assets/data.json": "09dfc9eb55819e52c3dc74b0f114dae8",
"assets/FontManifest.json": "9cc270f123d7b45813e36389ae96e107",
"assets/AssetManifest.bin.json": "73325abc20d70a5576aaee8a3364917c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "523d71018612cd6a1c07205ea0a1d445",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "15ce1946db9b0019dffe91aec4993dba",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "a6b5b950b807345281236a4cfddca838",
"assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/MaterialIcons-Regular.otf": "36aece6f537c15f2340308774a818ac3",
"assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/resume.pdf": "36fd55e0576d8b03727341f69102b629",
"assets/assets/myprojects/menubook.png": "2ec7c90ccdd4f78aacc53af405621d63",
"assets/assets/myprojects/menubook.jpg": "1c6a01b94f1c65649e50b743f785079e",
"assets/assets/myprojects/matchme.png": "d0882001a1d0c4132b7ed318d350f669",
"assets/assets/myprojects/matchme.jpg": "37dcb29aa4deb13d70e24bc2d00a3270",
"assets/assets/myprojects/dnd.jpg": "25f2c1a7ef9d82b816cf7d80450caa0d",
"assets/assets/myprojects/dnd.png": "3ba8d17f9e6910e9d333702ffb3365f4",
"assets/assets/myprojects/wo.jpg": "3255fe2b5df65138f8e1b0eb8d14a0f5",
"assets/assets/myprojects/wo.png": "1fb05b32edbc0ea3c24d9ac1560e6d77",
"assets/assets/myprojects/mlv.png": "4d609934ed4e61a82a6b0b621b46956d",
"assets/assets/myprojects/mlv.jpg": "c586512c1ae64d052e06e0b43e9447cd",
"assets/assets/myprojects/transport.jpg": "8f9f449607cd167544ead10189078abf",
"assets/assets/myprojects/transport.png": "d639d07ba78c094cf52a95290677f0fb",
"assets/assets/lottie/contact_mail.json": "5e0ae669da423034f1e66d83b330df5c",
"assets/assets/lottie/tech_stack.json": "ee728864df4970dcd386ab3124866add",
"assets/assets/lottie/mail_icon.json": "d008758b19fb406801353678aefb3a24",
"assets/assets/lottie/call_icon.json": "af3cbbb91856fc8577155d21ede3ea06",
"assets/assets/photos/imran_logo.png": "a675451967f071d1bbca227dc56d69f6",
"assets/assets/photos/gdf.jpg": "b8a0a12880e95d7e27d4da46a0d63ce6",
"assets/assets/photos/imranbw.jpg": "052d53e4ba104b1f1a0bddcb7b8c5a28",
"assets/assets/gif/heart.gif": "a61aec513b2b52466a5c6ee7ce9f4998",
"assets/assets/gif/rocket.gif": "605efe73b9defe4fadddd163e47d82a5",
"assets/assets/gif/verified.gif": "add18fef515bedab515aca28798b8a4a",
"favicon.svg": "02cc6f0c24b71ff0415c80fd3f763aaa",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
