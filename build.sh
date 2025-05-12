
#!/bin/bash

# Run the standard build process
npm run build

# Copy HTML files to the dist/client directory
echo "Copying HTML files to dist/client..."
cp *.html dist/client/

# Copy assets directory
echo "Copying assets directory to dist/client..."
cp -r assets dist/client/assets

# Copy blog data files
echo "Copying blog data files..."
cp blog-data.js dist/client/
cp analytics.js dist/client/

echo "Build completed successfully!"
