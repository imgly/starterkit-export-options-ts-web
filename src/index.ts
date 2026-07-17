/**
 * CE.SDK Export Options Editor Starterkit - Main Entry Point
 *
 * A design editor with advanced export options including format selection
 * (JPEG, PNG, PDF), quality settings, resolution control, and page range
 * selection for multi-page documents.
 *
 * @see https://img.ly/docs/cesdk/js/get-started/overview-e18f40/
 */

import CreativeEditorSDK from '@cesdk/cesdk-js';

import { initExportOptionsEditor } from './imgly';
import { resolveAssetPath } from './imgly/resolveAssetPath';

// ============================================================================
// Configuration
// ============================================================================

const config = {
  userId: 'starterkit-export-options-user',

  // IMG.LY CDN (for quick testing only, NOT recommended for production)

  // Local assets for development

};

// ============================================================================
// Initialize Editor
// ============================================================================

/**
 * Initialize the CE.SDK Export Options Editor
 */
async function initializeEditor(): Promise<void> {
  try {
    // Create new CE.SDK instance
    const cesdk = await CreativeEditorSDK.create('#cesdk_container', config);

    // Debug access (remove in production)
    (window as any).cesdk = cesdk;

    // Initialize with export options configuration
    await initExportOptionsEditor(cesdk);

    // ============================================================================
    // Load Scene
    // ============================================================================

    // Load the demo scene
    await cesdk.loadFromURL(resolveAssetPath('/assets/example-1.scene'));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize CE.SDK:', error);
  }
}

// Start the editor
initializeEditor();
