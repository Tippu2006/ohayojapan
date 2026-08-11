Add-Type -AssemblyName System.Drawing
$logo = [System.Drawing.Bitmap]::FromFile('public/logo.png')

function SaveResized($w, $h, $outPath) {
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($logo, 0, 0, $w, $h)
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    $g.Dispose()
}

SaveResized 32 32 'public/favicon-32x32.png'
SaveResized 32 32 'public/favicon.ico'
SaveResized 180 180 'public/apple-touch-icon.png'
SaveResized 256 256 'public/favicon.png'

$logo.Dispose()
Write-Host "Favicons successfully created!"
