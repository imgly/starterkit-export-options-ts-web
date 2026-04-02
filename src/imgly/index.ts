/**
 * CE.SDK Export Options Editor - Initialization Module
 *
 * This module provides the main entry point for initializing the design editor
 * with advanced export options. Import and call `initExportOptionsEditor()`
 * to configure a CE.SDK instance with format selection, quality settings,
 * resolution control, and page range selection for exports.
 *
 * @see https://img.ly/docs/cesdk/js/getting-started/
 */

import CreativeEditorSDK from '@cesdk/cesdk-js';

import {
  BlurAssetSource,
  ColorPaletteAssetSource,
  CropPresetsAssetSource,
  DemoAssetSources,
  EffectsAssetSource,
  FiltersAssetSource,
  PagePresetsAssetSource,
  StickerAssetSource,
  TextAssetSource,
  TextComponentAssetSource,
  TypefaceAssetSource,
  UploadAssetSources,
  VectorShapeAssetSource
} from '@cesdk/cesdk-js/plugins';

// Configuration and plugins
import { ExportOptionsEditorConfig } from './config/plugin';
import { setupExportDesignPanel } from './plugins/export-design-panel';

// Re-export for external use
export { ExportOptionsEditorConfig } from './config/plugin';
export { setupExportDesignPanel } from './plugins/export-design-panel';

/**
 * Initialize the CE.SDK Export Options Editor with a complete configuration.
 *
 * This function configures a CE.SDK instance with:
 * - Design editor UI configuration
 * - Export design panel plugin with format, quality, and resolution options
 * - Asset source plugins (images, shapes, text, etc.)
 * - Multi-page design support with page range export
 *
 * @param cesdk - The CreativeEditorSDK instance to configure
 */
export async function initExportOptionsEditor(cesdk: CreativeEditorSDK) {
  // ============================================================================
  // Configuration Plugin
  // ============================================================================

  // Add the export options editor configuration plugin
  // This sets up the UI, features, settings, and i18n for export-focused editing
  await cesdk.addPlugin(new ExportOptionsEditorConfig());

  // ============================================================================
  // Theme and Locale
  // ============================================================================

  // Configure appearance: 'light' | 'dark' | 'system'
  // cesdk.setTheme('dark');
  // cesdk.setLocale('en');

  // ============================================================================
  // Export Design Panel Plugin
  // ============================================================================

  // Setup the export design panel with format, quality, and resolution options
  setupExportDesignPanel(cesdk);

  // ============================================================================
  // Disable Placeholder and Preview Features
  // ============================================================================

  // Disable placeholder, preview, and page resize features for export options workflow
  cesdk.feature.enable('ly.img.placeholder', false);
  cesdk.feature.enable('ly.img.preview', false);
  cesdk.feature.enable('ly.img.page.resize', false);

  // ============================================================================
  // Asset Source Plugins
  // ============================================================================

  // Asset source plugins provide built-in asset libraries

  // Blur presets for blur effects
  await cesdk.addPlugin(new BlurAssetSource());

  // Color palettes for design
  await cesdk.addPlugin(new ColorPaletteAssetSource());

  // Crop presets (aspect ratios)
  await cesdk.addPlugin(new CropPresetsAssetSource());

  // Local upload sources (images)
  await cesdk.addPlugin(
    new UploadAssetSources({
      include: ['ly.img.image.upload']
    })
  );

  // Demo assets (templates, images, stickers, shapes, text)
  await cesdk.addPlugin(
    new DemoAssetSources({
      include: [
        'ly.img.templates.blank.*',
        'ly.img.templates.presentation.*',
        'ly.img.templates.print.*',
        'ly.img.templates.social.*',
        'ly.img.image.*',
        'ly.img.sticker.*',
        'ly.img.vector.shape.*',
        'ly.img.text.*'
      ]
    })
  );

  // Visual effects (adjustments, vignette, etc.)
  await cesdk.addPlugin(new EffectsAssetSource());

  // Photo filters (LUT, duotone)
  await cesdk.addPlugin(new FiltersAssetSource());

  // Page format presets (A4, Letter, social media sizes)
  await cesdk.addPlugin(new PagePresetsAssetSource());

  // Sticker assets
  await cesdk.addPlugin(new StickerAssetSource());

  // Text presets (headlines, body text styles)
  await cesdk.addPlugin(new TextAssetSource());

  // Text components (pre-designed text layouts)
  await cesdk.addPlugin(new TextComponentAssetSource());

  // Typeface/font assets
  await cesdk.addPlugin(new TypefaceAssetSource());

  // Vector shapes (rectangles, circles, arrows, etc.)
  await cesdk.addPlugin(new VectorShapeAssetSource());

  // ============================================================================
  // Load Scene
  // ============================================================================

  // Load the demo scene from the showcases URL
  await cesdk.loadFromURL('https://img.ly/showcases/cesdk/example-1.scene');
}
