#!/bin/bash

# Run the standard build process
npm run build

# Copy all HTML files to the dist/client directory
echo "Copying HTML files to dist/client..."
cp *.html dist/client/

# Copy assets directory to dist/client if it exists
if [ -d "assets" ]; then
  echo "Copying assets directory to dist/client..."
  cp -r assets dist/client/
fi

# Copy attached_assets directory to dist/client if it exists
if [ -d "attached_assets" ]; then
  echo "Copying attached_assets directory to dist/client..."
  cp -r attached_assets dist/client/
fi

echo "Build completed successfully!"