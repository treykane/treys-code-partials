// This should be included at the end of all other content, and within and element hidden visually and from screen readers.

<script type="text/javascript">
		<!--//--><![CDATA[//><!--
			var images = new Array()
			function preload() {
				for (i = 0; i < preload.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preload.arguments[i]
				}
			}
			preload(
				"/image/path.png",
                "/image/path.png"
			)
		//--><!]]>
	</script>