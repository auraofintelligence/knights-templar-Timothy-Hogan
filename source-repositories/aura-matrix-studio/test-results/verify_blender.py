import bpy, json, math
from pathlib import Path
from mathutils import Vector
base=Path(r"C:\Users\lukec\Documents\GitHubLocal\aura-matrix-studio")
scene=bpy.data.scenes['Aura Matrix Explainer']
bpy.context.window.scene=scene
objects=[obj for obj in scene.objects if obj.type=='MESH']
assert len(objects)==7
for obj in objects:
 assert len(obj.data.polygons)==288
 assert [v.value for v in obj.data.attributes['aura_cell'].data]==list(range(1,289))
for frame in [1,289,505,865]:
 scene.frame_set(frame)
 depsgraph=bpy.context.evaluated_depsgraph_get()
 for obj in objects:
  evaluated=obj.evaluated_get(depsgraph)
  assert all(math.isfinite(v) for v in evaluated.matrix_world.translation)
scene.render.engine='BLENDER_WORKBENCH'
scene.display.shading.light='STUDIO'
scene.display.shading.color_type='MATERIAL'
scene.display.shading.background_type='WORLD'
scene.world.color=(.8,.8,.78)
scene.render.resolution_percentage=70
scene.frame_set(817)
scene.render.filepath=str(base/'test-results/blender-body.png')
bpy.ops.render.render(write_still=True,scene=scene.name)
print('BLENDER_VERIFY_OK: 7 meshes, each 288 numbered cells; animated geometry evaluated; body frame rendered')
