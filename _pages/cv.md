---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

# galaxyEmulator

Galaxy can be emulated using magneto-hydrodynamical simulations by assigning each particle with a SED using radiative transfer code, instead of
adopting empirical method, such as Halo occupation distributions (HODs).  
We build a Python wrapper to emulate galaxies, involving complete routine from preprocessing to postprocessing, from IllustrisTNG using SKIRT.
Preprocessing extracts stellar and dust particles from IllustrisTNG, assigns SED to them by astronomical parameters, such as mass, metallicity and so on, and executes the SKIRT code. On the other hand, postprocessing applies instrumental and observational effects, including point spread functions (PSFs) and background noises for specific instruments.  
This project serves as the foundations for addressing other interesting works including blending and parameter estimations.  
Our code is publicly available at [Github](https://github.com/xczhou-astro/galaxyEmulator) and relevant paper is still drafting. 

# DESI Photo-z Catalogue

DESI Legacy Surveys serve as 