<cfoutput>
<!doctype html>
<html>
	<head>
		<title>Webpack Example Application</title>
	</head>
	<body>
		<div style="border: 1px solid black">
			#body#
		</div>
		<cfif rc.keyExists('entryJSPath')>
			<script src="#encodeForHTMLAttribute(rc.entryJSPath)#"></script>
		</cfif>
	</body>
</html>
</cfoutput>
