{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs
  ];
  idx.extensions = [
    "svelte.svelte-vscode"
    "vue.volar"
  ];
  idx.previews = {
    previews = [
      {
        command = [
          "npm"
        "run"
        "start"
        "--"
        "--port"
        "$PORT"
        "--host"
        "0.0.0.0"
        "--disable-host-check"
        ];
        env = {
          PORT = "$PORT";
        };
        id = "web";
        manager = "web";
      }
      {
        id = "ios";
        manager = "ios";
      }
    ];
  };
}