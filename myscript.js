//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bhow\b/g, "Voldemort's Nipple");
	v = v.replace(/\bthe\b/g, "Your Mom");
	v = v.replace(/\brestaurant\b/g, "Turd");
	v = v.replace(/\bpizza\b/g, "Fart Brain");
	v = v.replace(/\bmy\b/g, "Kim Jong Un");
	v = v.replace(/\byour\b/g, "Bite Your Mom's Buttock");
	v = v.replace(/\bmac\b/g, "Poopy Pooper");
	v = v.replace(/\bhelp\b/g, "Urine");
	v = v.replace(/\btrump\b/g, "I poop my pants");
	v = v.replace(/\bTrump\b/g, "I poop my pants");
	
	
	textNode.nodeValue = v;
}
