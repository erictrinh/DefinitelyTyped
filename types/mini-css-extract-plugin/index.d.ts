// Type definitions for mini-css-extract-plugin 1.0
// Project: https://github.com/webpack-contrib/mini-css-extract-plugin
// Definitions by: JounQin <https://github.com/JounQin>
//                 Katsuya Hino <https://github.com/dobogo>
//                 Spencer Miskoviak <https://github.com/skovy>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ChunkData, Plugin } from 'webpack';

/**
 * Lightweight CSS extraction webpack plugin
 * This plugin extract CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
 * Configuration Detail: https://github.com/webpack-contrib/mini-css-extract-plugin#configuration
 */
declare class MiniCssExtractPlugin extends Plugin {
    /** webpack loader used always at the end of loaders list */
    static loader: string;

    constructor(options?: MiniCssExtractPlugin.PluginOptions);
}

declare namespace MiniCssExtractPlugin {
    interface PluginOptions {
        /**
         * Options similar to the same options in webpackOptions.output, both options are optional
         * May contain `[name]`, `[id]`, `hash` and `[chunkhash]`
         * With the filename option you can use chunk data to customize the filename.
         * This is particularly useful when dealing with multiple entry points and wanting to get more control out of the filename for a given entry point/chunk.
         * In the example below, we'll use filename to output the generated css into a different directory.
         */
        filename?: string | ((chunkData: ChunkData) => string);
        chunkFilename?: string;
        /**
         * For projects where CSS ordering has been mitigated through consistent
         * use of scoping or naming conventions, the CSS order warnings can be
         * disabled by setting this flag to true for the plugin.
         */
        ignoreOrder?: boolean;
        /**
         * By default, `mini-css-extract-plugin` generates JS modules that use the ES modules syntax.
         * There are some cases in which using ES modules is beneficial,
         * like in the case of module concatenation and tree shaking.
         * @default true
         */
        esModule?: boolean;
    }
}

export = MiniCssExtractPlugin;
