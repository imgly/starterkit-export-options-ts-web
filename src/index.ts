/**
 * CE.SDK Export Options Editor Starterkit - Main Entry Point
 *
 * A design editor with advanced export options including format selection
 * (JPEG, PNG, PDF), quality settings, resolution control, and page range
 * selection for multi-page documents.
 *
 * @see https://img.ly/docs/cesdk/js/getting-started/
 */

import CreativeEditorSDK from '@cesdk/cesdk-js';

import { initExportOptionsEditor } from './imgly';

// ============================================================================
// Configuration
// ============================================================================

const config = {
  // Unique user identifier for analytics (customize for your app)
  userId: 'starterkit-export-options-editor-user'

  // Local assets (uncomment and set path for self-hosted assets)
  // baseURL: `/assets/`,

  // License key (required for production)
  // license: 'YOUR_LICENSE_KEY',
};

// ============================================================================
// Initialize Export Options Editor
// ============================================================================

CreativeEditorSDK.create('#cesdk_container', config)
  .then(async (cesdk) => {
    // Debug access (remove in production)
    (window as any).cesdk = cesdk;

    // Initialize the export options editor
    await initExportOptionsEditor(cesdk);
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize CE.SDK:', error);
  });
