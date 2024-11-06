const NodeMediaServer = require('node-media-server');

const config = {
    rtmp: {
      port: 1935,
      chunk_size: 60000,
      gop_cache: true,
      ping: 30,
      ping_timeout: 60
    },
    http: {
      port: 8000,
      mediaroot: './media', 
      allow_origin: '*' 
    },
    trans: {
      ffmpeg: 'C:/ProgramData/chocolatey/bin/ffmpeg.exe',
      tasks: [
        {
          app: 'live',
          rtsp: true,
          hls: true,
          hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
          hls_path: './media/live', 
          dash: true,
          dashFlags: '[fmp4_buffer_size=1000]',
          dash_path: './media/live', 
          mp4: true,
          mp4Flags: '[movflags=faststart]',
          mp4_path: './media/live', 
          ac: 'aac',
          vc: 'libx264'
        }
      ]
    }
  };
  
  var nms = new NodeMediaServer(config);
  nms.run();
  