const { withRNVBabel } = require('rnv');

// module.exports = function (api) {
// 	api.cache(true);
// 	return {
//         presets: ["@babel/preset-env", "@babel/preset-react"]
// 	};
// };

module.exports = withRNVBabel({})

// module.exports = withRNVBabel((config) => {
//   config.plugins.push([
//     'react-native-reanimated/plugin',
//   ],);
// });

// module.exports = {
//   ...withRNVBabel({}),
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//         "module-resolver",
//         {
//           root: ['.'],
//           alias: {
//             // This needs to be mirrored in tsconfig.json
//             "@screens": ["./src/screens"],
//             "@services": ["./src/services"],
//             "@helpers": ["./src/helpers"],
//             "@navigators": ["./src/navigators"],
//             "@state": ["./src/state"],
//             "@context": ["./src/context"],
//             "@type": ["./src/type"],
//           },
//         },
//       ]
// }
